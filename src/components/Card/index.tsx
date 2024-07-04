import React from "react";
import { CardProps } from "@/components/Card/types";

const Card = ({ title, authorName, imageUrl, tags }: CardProps) => {
  return (
    <div
      className={
        "h-[400px] w-[400px] bg-black-0 rounded-xl shadow-md overflow-hidden"
      }
    >
      <div
        className={"h-[15%] w-full bg-primary flex justify-center items-center"}
      >
        {title}
      </div>
      <div className={"h-[70%] overflow-hidden flex items-center bg-secondary"}>
        <img src={imageUrl} className={"w-full"} />
      </div>
      <div
        className={
          "h-[15%] w-full bg-primary flex flex-col justify-center items-center"
        }
      >
        <div>by {authorName}</div>
        <div className={"flex gap-2"}>
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
