import { Column, ObjectWithRequiredId } from "@/components/RealTable/types";

export interface HeaderProps<Item extends ObjectWithRequiredId> {
  columns: Column<Item>[];
  classNames?: HeaderClassNames;
  onFilterChange?: (columnName: string, value: string | number) => void;
}

export interface HeaderClassNames {
  root?: string;
  rows?: string;
  columns?: string;
}
