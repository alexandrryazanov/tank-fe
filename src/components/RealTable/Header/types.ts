import { Column, ObjectWithRequiredId } from "@/components/RealTable/types";

export interface HeaderProps<Item extends ObjectWithRequiredId> {
  columns: Column<Item>[];
  classNames?: HeaderClassNames;
  onFilterChange?: (columnName: string, value: any) => void;
  onColumnMove?: (dragIndex: number, targetIndex: number) => void;
  isSelectable?: boolean;
}

export interface HeaderClassNames {
  root?: string;
  rows?: string;
  columns?: string;
}
