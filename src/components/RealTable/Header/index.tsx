import React from "react";
import { HeaderProps } from "./types";

const Header = ({ children }: HeaderProps) => {
  return <thead>{children}</thead>;
};

export default Header;
