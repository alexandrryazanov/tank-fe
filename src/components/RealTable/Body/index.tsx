import React from "react";
import { BodyProps } from "./types";

const Body = ({ children }: BodyProps) => {
  return <tbody>{children}</tbody>;
};

export default Body;
