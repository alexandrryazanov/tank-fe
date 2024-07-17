import { ReactElement } from "react";
import { Column } from "../types";

export interface TableProps<Item> {
  children:
    | ReactElement<HTMLTableRowElement>
    | ReactElement<HTMLTableRowElement>[];
  columns: Column<Item>[];
}
