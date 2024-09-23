"use client";

import React, { useState } from "react";
import { SearchProps } from "@/components/Search/types";
import { Input } from "@nextui-org/input";

const Search = ({ onEnter }: SearchProps) => {
  const [value, setValue] = useState("");

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onEnter(value);
    }
  };

  return (
    <Input
      type="text"
      size="sm"
      variant="bordered"
      label="Tags"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={onKeyPress}
      color={"secondary"}
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: ["shadow-xl", "bg-primary"],
      }}
    />
  );
};

export default Search;
