import { ReactElement } from "react";
import { Column, ObjectWithRequiredId, RequireAtLeastOneOf } from "../types";

interface ITableProps<Item extends ObjectWithRequiredId> {
  children?:
    | ReactElement<HTMLTableRowElement>
    | ReactElement<HTMLTableRowElement>[];
  columns: Column<Item>[];
  data?: Item[];
  dataUnderChildren?: boolean;
  classNames?: MainClassNames;
}

export type TableProps<Item extends ObjectWithRequiredId> = RequireAtLeastOneOf<
  ITableProps<Item>,
  "children" | "data"
>;

interface TableClassNames {
  root?: string;
  loading?: string;
  empty?: string;
}

export interface MainClassNames {
  table?: TableClassNames;
}
