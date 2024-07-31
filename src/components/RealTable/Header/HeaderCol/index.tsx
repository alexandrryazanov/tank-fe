import React from "react";
import { HeaderColProps } from "./types";
import styles from "../../styles.module.scss";
import clsx from "clsx";

const HeaderCol = ({ children, className, ...thProps }: HeaderColProps) => {
  return (
    <th className={clsx(styles.headerCol, className)} {...thProps}>
      {children}
    </th>
  );
};

export default HeaderCol;
