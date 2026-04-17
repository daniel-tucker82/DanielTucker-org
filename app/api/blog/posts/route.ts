import { NextRequest, NextResponse } from "next/server";
import {
  createBlogPost,
  deleteBlogPost,
  getBlogPosts,
  updateBlogPost,
} from "@/lib/blog-storage";
import { isCurrentUserApprovedAdmin } from "@/lib/admin-auth";
import { BlogPostInput } from "@/types/blog";

/** Coerce optional image fields so storage always gets strings. */
function normalizeBlogInput(payload: Partial<BlogPostInput>): BlogPostInput {
  const imageUrl = (payload.imageUrl ?? "").trim();
  const thumbnailRaw = (payload.thumbnailUrl ?? "").trim();
  return {
    title: payload.title!.trim(),
    subtitle: (payload.subtitle ?? "").trim(),
    slug: payload.slug!.trim(),
    excerpt: (payload.excerpt ?? "").trim(),
    imageUrl,
    thumbnailUrl: thumbnailRaw || imageUrl,
    category: payload.category!.trim(),
    tags: payload.tags ?? [],
    status: payload.status!,
    contentHtml: payload.contentHtml!.trim(),
  };
}

function validatePayload(payload: Partial<BlogPostInput>): payload is BlogPostInput {
  return Boolean(
    payload.category &&
    payload.title &&
    payload.slug &&
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

  try {
    const post = await createBlogPost(normalizeBlogInput(body));
    return NextResponse.json({ post });
  } catch (err) {
    console.error("blog post create failed", err);
    return NextResponse.json(
      {
        error:
          "Unable to save post on this deployment. If this is Vercel, persistent blog storage still needs to be moved off local files.",
      },
      { status: 500 },
    );
  }
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

  try {
    const post = await updateBlogPost(postId, normalizeBlogInput(body));
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (err) {
    console.error("blog post update failed", err);
    return NextResponse.json(
      {
        error:
          "Unable to update post on this deployment. If this is Vercel, persistent blog storage still needs to be moved off local files.",
      },
      { status: 500 },
    );
  }
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

  try {
    const deleted = await deleteBlogPost(id);
    if (!deleted) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("blog post delete failed", err);
    return NextResponse.json(
      {
        error:
          "Unable to delete post on this deployment. If this is Vercel, persistent blog storage still needs to be moved off local files.",
      },
      { status: 500 },
    );
  }
}
