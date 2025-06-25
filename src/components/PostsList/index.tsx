import React from "react";
import Card from "@/components/Card";
import { Post } from "@/api/posts";

const PostsList = ({ list }: { list: Post[] }) => {
  if (list.length === 0) {
    return <div>Пока постов нет...</div>;
  }

  return (
    <div className={"flex flex-wrap gap-2"}>
      {list.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          authorName={post.author.name}
          imageUrl={post.images[0] || ""}
          tags={post.tags}
        />
      ))}
    </div>
  );
};

export default PostsList;
