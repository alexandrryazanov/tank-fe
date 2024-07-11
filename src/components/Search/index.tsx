"use client";

import React, { useState } from "react";
import { SearchProps } from "@/components/Search/types";

const Search = ({ onEnter }: SearchProps) => {
  const [value, setValue] = useState("");

  console.log("test");

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onEnter(value);
    }
  };

  return (
    <input
      className={"w-full border-primary border-2 px-2"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={onKeyPress}
    />
  );
};

export default Search;
