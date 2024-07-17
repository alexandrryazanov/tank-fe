import React from "react";
import { HeaderColProps } from "./types";
import styles from "../styles.module.scss";

const HeaderCol = ({ children }: HeaderColProps) => {
  return <th className={styles.headerCol}>{children}</th>;
};

export default HeaderCol;
