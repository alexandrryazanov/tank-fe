import { ReactNode } from "react";
type ThHTMLAttributes = React.DetailedHTMLProps<
  React.ThHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export interface HeaderColProps extends ThHTMLAttributes {
  children: ReactNode;
}
