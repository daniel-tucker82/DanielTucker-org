/** Must match the Vercel Blob store mode (set at store creation; cannot be changed later). */
export function getBlogBlobAccess(): "public" | "private" {
  const raw = process.env.BLOG_BLOB_ACCESS?.trim().toLowerCase();
  if (raw === "private") return "private";
  return "public";
}
