import React from "react";
import { RowProps } from "./types";

const Row = ({ children }: RowProps) => {
  return <tr>{children}</tr>;
};

export default Row;
