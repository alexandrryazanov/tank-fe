import React from "react";

type TdHTMLAttributes = React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export interface ColProps extends TdHTMLAttributes {
  children: React.ReactNode;
}
