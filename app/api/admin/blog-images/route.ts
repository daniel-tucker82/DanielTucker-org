import { put } from "@vercel/blob";
import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";
import { isCurrentUserApprovedAdmin } from "@/lib/admin-auth";
import { getBlogBlobAccess } from "@/lib/blog-blob-access";

/** Sharp requires Node; avoid any accidental Edge bundle. */
export const runtime = "nodejs";

function slugifyFileName(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function POST(req: NextRequest) {
  const isAdmin = await isCurrentUserApprovedAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const blobToken = process.env.BLOB_READ_WRITE_TOKEN?.trim();
  if (!blobToken) {
    return NextResponse.json(
      {
        error:
          "BLOB_READ_WRITE_TOKEN is missing. In Vercel → Project → Settings → Environment Variables, ensure it is set for Production (and redeploy).",
      },
      { status: 503 },
    );
  }

  const data = await req.formData();
  const file = data.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required." }, { status: 400 });
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const originalBuffer = Buffer.from(arrayBuffer);
    const baseName = slugifyFileName(file.name) || "blog-image";
    const stamp = Date.now();

    const largeBuffer = await sharp(originalBuffer)
      .resize({ width: 1600, height: 1000, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 86 })
      .toBuffer();

    const thumbBuffer = await sharp(originalBuffer)
      .resize({ width: 480, height: 320, fit: "cover" })
      .webp({ quality: 82 })
      .toBuffer();

    const access = getBlogBlobAccess();
    const putOpts = {
      access,
      contentType: "image/webp",
      addRandomSuffix: false,
      token: blobToken,
    };

    const largeBlob = await put(`blog/${stamp}-${baseName}-large.webp`, largeBuffer, putOpts);

    const thumbBlob = await put(`blog/${stamp}-${baseName}-thumb.webp`, thumbBuffer, putOpts);

    const imageUrl =
      access === "private"
        ? `/api/blog/blob?p=${encodeURIComponent(largeBlob.pathname)}`
        : largeBlob.url;
    const thumbnailUrl =
      access === "private"
        ? `/api/blog/blob?p=${encodeURIComponent(thumbBlob.pathname)}`
        : thumbBlob.url;

    return NextResponse.json({
      imageUrl,
      thumbnailUrl,
    });
  } catch (err) {
    console.error("blog-images upload failed", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      {
        error:
          "Could not process or upload the image. Try a JPEG or PNG under a few MB. If this persists, check Vercel function logs.",
        detail: message,
        hint:
          getBlogBlobAccess() === "public"
            ? "If your Vercel Blob store is Private, set BLOG_BLOB_ACCESS=private for Production (must match the store) and redeploy."
            : "If your Vercel Blob store is Public, remove BLOG_BLOB_ACCESS or set BLOG_BLOB_ACCESS=public and redeploy.",
      },
      { status: 500 },
    );
  }
}
