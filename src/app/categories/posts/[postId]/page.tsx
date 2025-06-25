import React from "react";
import { getPost, getPosts } from "@/api/posts";

const PostPage = async ({ params }: { params: { postId: string } }) => {
  const data = await getPost(Number(params.postId));
  return (
    <div className={"h-fit shadow-small p-10 flex flex-col items-center"}>
      <img
        src={data.images[0]}
        alt={"No photo"}
        className="max-w-4xl w-full object-cover"
      />
      <div className={"w-full  p-5 flex flex-col items-center"}>
        <div>{data.title}</div>
        <div>{data.author.name}</div>
      </div>
    </div>
  );
};

export default PostPage;
