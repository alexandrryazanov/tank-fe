"use client";

import React, { useState } from "react";
import { ByValueFilterProps } from "./types";

const ByValueFilter = ({
  onChange,
  isEnterNecessary,
  classNames,
}: ByValueFilterProps) => {
  const [value, setValue] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!isEnterNecessary) {
      onChange(e.target.value);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isEnterNecessary) {
      onChange(value);
    }
  };

  return (
    <div className={classNames?.root}>
      <input
        value={value}
        onChange={changeHandler}
        onKeyDown={onKeyDown}
        className={classNames?.input}
      />
    </div>
  );
};

export default ByValueFilter;
