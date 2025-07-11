import { getPosts } from "@/api/posts";
import PostsList from "@/components/PostsList";


export default async function PostsPage() {
  const data = await getPosts({ limit: 30 });

  return (
    <main>
      <PostsList list={data.list} />
    </main>
  );
}
