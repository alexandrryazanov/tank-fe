import React from "react";
import ChangePassword from "@/components/ChangePassword";
import { getMyPosts } from "@/api/posts";
import PostsList from "@/components/PostsList";

export default async function ProfilePage() {
  const data = await getMyPosts({ limit: 30 });

  return (
    <main className={"flex flex-col gap-4"}>
      <ChangePassword />
      <PostsList list={data.list} />
    </main>
  );
}
