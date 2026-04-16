import { put } from "@vercel/blob";
import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";
import { isCurrentUserApprovedAdmin } from "@/lib/admin-auth";

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

  const data = await req.formData();
  const file = data.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required." }, { status: 400 });
  }

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

  const largeBlob = await put(`blog/${stamp}-${baseName}-large.webp`, largeBuffer, {
    access: "public",
    contentType: "image/webp",
    addRandomSuffix: false,
  });

  const thumbBlob = await put(`blog/${stamp}-${baseName}-thumb.webp`, thumbBuffer, {
    access: "public",
    contentType: "image/webp",
    addRandomSuffix: false,
  });

  return NextResponse.json({
    imageUrl: largeBlob.url,
    thumbnailUrl: thumbBlob.url,
  });
}
