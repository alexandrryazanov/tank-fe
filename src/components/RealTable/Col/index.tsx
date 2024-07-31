import React from "react";
import { ColProps } from "./types";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Col = ({ children, className, ...tdProps }: ColProps) => {
  return (
    <td className={clsx(styles.col, className)} {...tdProps}>
      {children}
    </td>
  );
};

export default Col;
