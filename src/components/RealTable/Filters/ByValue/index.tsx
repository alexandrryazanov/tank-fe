"use client";

import React, { useState } from "react";
import { ByValueFilterProps } from "./types";

const ByValueFilter = ({ onChange }: ByValueFilterProps) => {
  const [value, setValue] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} />
    </div>
  );
};

export default ByValueFilter;
