import { mkdir, writeFile } from "fs/promises";
import path from "path";

const PRODUCTION_ORIGIN = "https://danieltucker.org";
const OUT_DIR = path.join(process.cwd(), "public", "blog");
const POSTS_FILE = path.join(process.cwd(), "data", "blog-posts.json");

function blobPathFromUrl(url) {
  if (!url.startsWith("/api/blog/blob?")) return null;
  const query = url.slice("/api/blog/blob?".length);
  const params = new URLSearchParams(query);
  return params.get("p");
}

async function downloadImage(blobPath) {
  const fileName = path.basename(blobPath);
  const localPath = `/blog/${fileName}`;
  const dest = path.join(OUT_DIR, fileName);
  const url = `${PRODUCTION_ORIGIN}/api/blog/blob?p=${encodeURIComponent(blobPath)}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buffer);
  console.log(`Downloaded ${fileName}`);
  return localPath;
}

async function main() {
  const res = await fetch(`${PRODUCTION_ORIGIN}/api/blog/posts`);
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }

  const { posts } = await res.json();
  await mkdir(OUT_DIR, { recursive: true });

  const pathMap = new Map();
  for (const post of posts) {
    for (const field of ["imageUrl", "thumbnailUrl"]) {
      const url = post[field]?.trim();
      if (!url) continue;
      const blobPath = blobPathFromUrl(url);
      if (!blobPath || pathMap.has(blobPath)) continue;
      pathMap.set(blobPath, await downloadImage(blobPath));
    }
  }

  const localPosts = posts.map((post) => ({
    ...post,
    imageUrl: blobPathFromUrl(post.imageUrl)
      ? pathMap.get(blobPathFromUrl(post.imageUrl))
      : post.imageUrl,
    thumbnailUrl: blobPathFromUrl(post.thumbnailUrl)
      ? pathMap.get(blobPathFromUrl(post.thumbnailUrl))
      : post.thumbnailUrl,
  }));

  await writeFile(POSTS_FILE, JSON.stringify(localPosts, null, 2), "utf8");
  console.log(`Wrote ${localPosts.length} posts to ${POSTS_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
