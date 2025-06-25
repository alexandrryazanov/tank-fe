import React from "react";
import ChangePassword from "@/components/ChangePassword";
import { getMyPosts } from "@/api/posts";
import PostsList from "@/components/PostsList";
import BitcoinPrice from "@/components/Binance";

export default async function ProfilePage() {
  // const data = await getMyPosts({ limit: 30 });

  return (
    <main className={"flex flex-col gap-4"}>
      <ChangePassword />
      {/*<PostsList list={data.list} />*/}
      <BitcoinPrice />
    </main>
  );
}
