import { ListResponse } from "@/api/types";

interface Post {
  id: number;
  title: string;
  description: string | null;
  images: string[];
  tags: string[];
  author: User;
}

export async function getPosts(): Promise<ListResponse<Post>> {
  const res = await fetch(`${process.env.BASE_URL}/posts?limit=30`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
}
