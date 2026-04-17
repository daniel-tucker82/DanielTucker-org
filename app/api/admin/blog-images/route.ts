import { put } from "@vercel/blob";
import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";
import { isCurrentUserApprovedAdmin } from "@/lib/admin-auth";

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

    const putOpts = {
      access: "public" as const,
      contentType: "image/webp",
      addRandomSuffix: false,
      token: blobToken,
    };

    const largeBlob = await put(`blog/${stamp}-${baseName}-large.webp`, largeBuffer, putOpts);

    const thumbBlob = await put(`blog/${stamp}-${baseName}-thumb.webp`, thumbBuffer, putOpts);

    return NextResponse.json({
      imageUrl: largeBlob.url,
      thumbnailUrl: thumbBlob.url,
    });
  } catch (err) {
    console.error("blog-images upload failed", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    const lower = message.toLowerCase();
    const detail =
      lower.includes("token")
        ? "Blob token rejected or invalid for this store."
        : lower.includes("store")
          ? "Blob store not found or not accessible."
          : lower.includes("sharp")
            ? "Image processing failed in Sharp."
            : message;
    return NextResponse.json(
      {
        error:
          "Could not process or upload the image. Try a JPEG or PNG under a few MB. If this persists, check Vercel function logs.",
        detail,
      },
      { status: 500 },
    );
  }
}
