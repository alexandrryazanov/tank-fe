import React, { ReactElement } from "react";
import Header from "@/components/Header";

type TableT = React.FC & { Header: typeof Header };

interface TableTestProps {
  children: ReactElement<HTMLTableRowElement>[];
}

const TableTest = ({ children }: TableTestProps) => {
  return <table>{children}</table>;
};

export default TableTest as TableT;
