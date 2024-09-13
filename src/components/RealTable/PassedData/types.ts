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
  selectedRowIds?: Set<string | number>;
  onRowSelect?: (id: string | number, checked: boolean) => void;
}

export interface PassedDataClassnames {
  empty?: string;
  loading?: string;
  rows?: string;
  columns?: string;
}
