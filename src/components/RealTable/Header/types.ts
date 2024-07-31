import { Column, ObjectWithRequiredId } from "@/components/RealTable/types";

export interface HeaderProps<Item extends ObjectWithRequiredId> {
  columns: Column<Item>[];
  classNames?: HeaderClassNames;
}

export interface HeaderClassNames {
  root?: string;
  rows?: string;
  columns?: string;
}
