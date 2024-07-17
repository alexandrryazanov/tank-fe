import React, { ReactElement } from "react";

interface HeaderProps {
  children: ReactElement<HTMLTableRowElement>[];
}

const Header = ({ children }: HeaderProps) => {
  return <thead>{children}</thead>;
};

export default Header;
