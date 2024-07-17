import { ReactNode } from "react";

export interface Column<Item> {
  name: string;
  accessor: keyof Item | ((item: Item) => ReactNode);
}
