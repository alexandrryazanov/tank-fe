import { ReactNode } from "react";
type ThHTMLAttributes = React.DetailedHTMLProps<
  React.ThHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export interface HeaderColProps extends ThHTMLAttributes {
  children: ReactNode;
  index?: number;
  onMove?: (dragIndex: number, targetIndex: number) => void;
}
