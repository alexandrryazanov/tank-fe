import React from "react";
import { RowProps } from "./types";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Row = ({ children, className, ...trProps }: RowProps) => {
  return (
    <tr className={clsx(styles.row, className)} {...trProps}>
      {children}
    </tr>
  );
};

export default Row;
