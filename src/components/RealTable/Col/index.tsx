import React from "react";
import { ColProps } from "./types";
import styles from "../styles.module.scss";

const Col = ({ children }: ColProps) => {
  return <td className={styles.col}>{children}</td>;
};

export default Col;
