"use client";

import React, { useState } from "react";
import { ByRangeFilterProps, InputsState } from "./types";
import styles from "./styles.module.scss";
import { prepareRange } from "./utils";
import clsx from "clsx";

const ByRangeFilter = ({
  onChange,
  isEnterNecessary,
  min,
  max,
  classNames,
}: ByRangeFilterProps) => {
  const [value, setValue] = useState<InputsState>({
    min: String(min ?? ""),
    max: String(max ?? ""),
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof InputsState;

    setValue((prev) => ({ ...prev, [name]: e.target.value || "" }));
    if (!isEnterNecessary) {
      onChange({
        ...prepareRange(value),
        [name]: e.target.value ? Number(e.target.value) : undefined,
      });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isEnterNecessary) {
      onChange(prepareRange(value));
    }
  };

  return (
    <div className={clsx(styles["ByRangeFilter"], classNames?.root)}>
      <input
        value={value.min}
        onChange={changeHandler}
        onKeyDown={onKeyDown}
        name={"min"}
        placeholder={"Min"}
        className={clsx(
          styles["ByRangeFilter__input"],
          classNames?.inputs?.min
        )}
        type={"number"}
      />
      <input
        value={value.max}
        onChange={changeHandler}
        onKeyDown={onKeyDown}
        name={"max"}
        placeholder={"Max"}
        className={clsx(
          styles["ByRangeFilter__input"],
          classNames?.inputs?.max
        )}
        type={"number"}
      />
    </div>
  );
};

export default ByRangeFilter;
