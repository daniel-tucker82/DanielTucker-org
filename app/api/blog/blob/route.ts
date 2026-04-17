import { get } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { getBlogBlobAccess } from "@/lib/blog-blob-access";

/**
 * Serves blobs from the `blog/` prefix for private stores (browser cannot read private blob URLs directly).
 * Public stores should use blob URLs in the DB; this route is only needed when BLOG_BLOB_ACCESS=private.
 */
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  if (getBlogBlobAccess() !== "private") {
    return NextResponse.json({ error: "Not used for public blob stores." }, { status: 404 });
  }

  const p = req.nextUrl.searchParams.get("p") ?? "";
  if (!p.startsWith("blog/")) {
    return new NextResponse("Not found", { status: 404 });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN?.trim();
  if (!token) {
    return new NextResponse("Not configured", { status: 503 });
  }

  try {
    const out = await get(p, { access: "private", token });
    if (!out || out.statusCode === 304 || !out.stream) {
      return new NextResponse("Not found", { status: 404 });
    }

    const headers = new Headers();
    headers.set("content-type", out.blob.contentType);
    headers.set("cache-control", "public, max-age=3600, s-maxage=86400");
    const etag = out.headers.get("etag");
    if (etag) {
      headers.set("etag", etag);
    }

    return new NextResponse(out.stream, { status: 200, headers });
  } catch (err) {
    console.error("blog blob proxy failed", err);
    return new NextResponse("Error", { status: 500 });
  }
}
