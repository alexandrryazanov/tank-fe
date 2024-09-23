import React from "react";
import { Chip } from "@nextui-org/chip";

const TagsList = () => {
  return (
    <div className={"w-[240px] flex items-start justify-start flex-wrap gap-1"}>
      {new Array(50).fill(0).map((_, i) => (
        <Chip key={i} color="primary">{`tag${i}`}</Chip>
      ))}
    </div>
  );
};

export default TagsList;
