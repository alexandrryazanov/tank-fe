import Card from "@/components/Card";
import { getPosts } from "@/api/posts";

export default async function PhotosPage() {
  const data = await getPosts();

  return (
    <main>
      <div className={"flex flex-wrap gap-2"}>
        {data.list.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            authorName={post.author.name}
            imageUrl={post.images[0] || ""}
            tags={post.tags}
          />
        ))}
      </div>
    </main>
  );
}
