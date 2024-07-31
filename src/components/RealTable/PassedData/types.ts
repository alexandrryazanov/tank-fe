import { Column, ObjectWithRequiredId } from "../types";
import { ReactNode } from "react";

export interface PassedData<Item extends ObjectWithRequiredId> {
  data?: Item[];
  columns: Column<Item>[];
  emptyContent?: ReactNode;
  classNames?: PassedDataClassnames;
  isLoading?: boolean;
  loadingContent?: ReactNode;
}

export interface PassedDataClassnames {
  empty?: string;
  loading?: string;
  rows?: string;
  columns?: string;
}
