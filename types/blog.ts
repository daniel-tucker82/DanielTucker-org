export type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  thumbnailUrl: string;
  category: string;
  tags: string[];
  status: "DRAFT" | "PUBLISHED";
  contentHtml: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogPostInput = {
  title: string;
  subtitle?: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  thumbnailUrl?: string;
  category: string;
  tags?: string[];
  status: "DRAFT" | "PUBLISHED";
  contentHtml: string;
};
