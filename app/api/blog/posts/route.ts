import { NextRequest, NextResponse } from "next/server";
import {
  createBlogPost,
  deleteBlogPost,
  getBlogPosts,
  updateBlogPost,
} from "@/lib/blog-storage";
import { isCurrentUserApprovedAdmin } from "@/lib/admin-auth";
import { BlogPostInput } from "@/types/blog";

function validatePayload(payload: Partial<BlogPostInput>): payload is BlogPostInput {
  return Boolean(
    payload.category &&
    payload.title &&
      payload.slug &&
      payload.imageUrl &&
      payload.status &&
      payload.contentHtml,
  );
}

export async function GET() {
  const posts = await getBlogPosts();
  return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
  const isAdmin = await isCurrentUserApprovedAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const body = (await req.json()) as Partial<BlogPostInput>;
  if (!validatePayload(body)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const post = await createBlogPost(body);
  return NextResponse.json({ post });
}

export async function PUT(req: NextRequest) {
  const isAdmin = await isCurrentUserApprovedAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const body = (await req.json()) as Partial<BlogPostInput> & { id?: string };
  const postId = body.id;
  if (!postId || !validatePayload(body)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const post = await updateBlogPost(postId, body);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function DELETE(req: NextRequest) {
  const isAdmin = await isCurrentUserApprovedAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const deleted = await deleteBlogPost(id);
  if (!deleted) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
