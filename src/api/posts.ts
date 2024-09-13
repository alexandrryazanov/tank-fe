import { ListResponse } from "@/api/types";

export interface Post {
  id: number;
  title: string;
  description: string | null;
  images: string[];
  tags: string[];
  author: User;
}

export async function getPosts({
  limit = 50,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
} = {}): Promise<ListResponse<Post>> {
  const res = await fetch(
    `${process.env.BASE_URL}/posts?limit=${limit}&offset=${offset}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
}

export async function getMyPosts({
  limit = 50,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
} = {}): Promise<ListResponse<Post>> {
  const res = await fetch(
    `${process.env.BASE_URL}/posts/my?limit=${limit}&offset=${offset}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch my posts");

  return res.json();
}
