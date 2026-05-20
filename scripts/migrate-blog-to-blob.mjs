/**
 * Upload a blog backup JSON file to Vercel Blob (production storage).
 *
 * Usage:
 *   node --env-file=.env.local scripts/migrate-blog-to-blob.mjs path/to/backup.json
 *
 * Required env:
 *   BLOB_READ_WRITE_TOKEN
 * Optional:
 *   BLOG_BLOB_ACCESS=private|public  (default: public)
 *   BLOG_POSTS_BLOB_PATH             (default: blog/blog-posts.json)
 */

import { readFileSync } from "fs";
import { put } from "@vercel/blob";

const backupPath = process.argv[2];
const token = process.env.BLOB_READ_WRITE_TOKEN?.trim();
const access = process.env.BLOG_BLOB_ACCESS?.trim().toLowerCase() === "private" ? "private" : "public";
const blobPath = process.env.BLOG_POSTS_BLOB_PATH?.trim() || "blog/blog-posts.json";

if (!backupPath) {
  console.error("Usage: node --env-file=.env.local scripts/migrate-blog-to-blob.mjs <backup.json>");
  process.exit(1);
}

if (!token) {
  console.error("Missing BLOB_READ_WRITE_TOKEN. Add it to .env.local or your shell environment.");
  process.exit(1);
}

const raw = JSON.parse(readFileSync(backupPath, "utf8"));
const posts = Array.isArray(raw) ? raw : raw.posts;

if (!Array.isArray(posts)) {
  console.error("Backup must be a JSON array of posts or { \"posts\": [...] }.");
  process.exit(1);
}

const published = posts.filter((p) => p.status === "PUBLISHED").length;

const result = await put(blobPath, JSON.stringify(posts, null, 2), {
  access,
  token,
  addRandomSuffix: false,
  allowOverwrite: true,
  contentType: "application/json",
});

console.log(`Uploaded ${posts.length} posts (${published} published) to blob: ${blobPath}`);
console.log(`Access mode: ${access}`);
console.log(result.url ? `URL: ${result.url}` : "Done.");
