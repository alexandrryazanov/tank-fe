import { ListResponse } from "@/api/types";

export interface Post {
  id: number;
  title: string;
  description: string | null;
  images: string[];
  tags: string[];
  author: User;
}

export interface Comment {
  id: number;
  text: string;
  authorId: number;
  createdAt: string;
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

export async function getPost(postId: number): Promise<Post> {
  const res = await fetch(`${process.env.BASE_URL}/posts/${postId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch post");

  return res.json();
}

export async function getPostComments({
  limit = 50,
  offset = 0,
  postId,
}: {
  limit?: number;
  offset?: number;
  postId: number;
}): Promise<ListResponse<Comment>> {
  const res = await fetch(
    `${process.env.BASE_URL}/posts/${postId}/comments/?limit=${limit}&offset=${offset}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
}
