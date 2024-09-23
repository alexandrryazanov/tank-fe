import { Column, ObjectWithRequiredId } from "../types";
import { ReactNode } from "react";

export interface PassedData<Item extends ObjectWithRequiredId> {
  data?: Item[];
  columns: Column<Item>[];
  emptyContent?: ReactNode;
  classNames?: PassedDataClassnames;
  isLoading?: boolean;
  loadingContent?: ReactNode;
  isSelectable?: boolean;
  selectedRows?: Record<string, Item>;
  onRowSelect?: (item: Item) => void;
}

export interface PassedDataClassnames {
  empty?: string;
  loading?: string;
  rows?: string;
  columns?: string;
}
