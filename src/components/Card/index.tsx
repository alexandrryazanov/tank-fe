import React from "react";
import { CardProps } from "@/components/Card/types";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";

const PostCard = ({ title, authorName, imageUrl, tags }: CardProps) => {
  return (
    <Card
      isFooterBlurred
      className="w-[400px] h-[400px] col-span-12 sm:col-span-7 shadow-small"
    >
      <Image
        removeWrapper
        alt="Image background"
        className="z-0 w-full h-full object-cover"
        src={imageUrl}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-small text-secondary">{title}</p>
            <p className="text-small text-secondary">By {authorName}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {tags.map((tag) => (
            <Chip key={tag} size="md" color="success">
              {tag}
            </Chip>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
