import { ReactElement, ReactNode } from "react";
import { Column, ObjectWithRequiredId, RequireAtLeastOneOf } from "../types";
import { PassedDataClassnames } from "@/components/RealTable/PassedData/types";
import { HeaderClassNames } from "@/components/RealTable/Header/types";

interface ITableProps<Item extends ObjectWithRequiredId> {
  children?:
    | ReactElement<HTMLTableRowElement>
    | ReactElement<HTMLTableRowElement>[];
  columns: Column<Item>[];
  data?: Item[];
  dataUnderChildren?: boolean;
  emptyContent?: ReactNode;
  isLoading?: boolean;
  loadingContent?: ReactNode;
  onFilterChange?: (columnName: string, value: string | number) => void;
  classNames?: MainClassNames;
}

export type TableProps<Item extends ObjectWithRequiredId> = RequireAtLeastOneOf<
  ITableProps<Item>,
  "children" | "data"
>;

interface TableClassNames {
  root?: string;
  header?: HeaderClassNames;
}

export interface MainClassNames {
  table?: TableClassNames;
  data?: PassedDataClassnames;
}
