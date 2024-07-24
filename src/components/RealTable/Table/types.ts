import { HTMLAttributes, ReactElement } from "react";
import { Column, ObjectWithRequiredId, RequireAtLeastOneOf } from "../types";
import TailwindConfig from "tailwindcss/stubs/tailwind.config";

interface ITableProps<Item extends ObjectWithRequiredId> {
  children?:
    | ReactElement<HTMLTableRowElement>
    | ReactElement<HTMLTableRowElement>[];
  columns: Column<Item>[];
  data?: Item[];
  dataUnderChildren?: boolean;
  classes?: MainClasses;
}

export type TableProps<Item extends ObjectWithRequiredId> = RequireAtLeastOneOf<
  ITableProps<Item>,
  "children" | "data"
>;

interface TableClasses {
  root?: string;
  isLoading?: string;
  isEmpty?: string;
}

export interface MainClasses {
  table?: TableClasses;
}
