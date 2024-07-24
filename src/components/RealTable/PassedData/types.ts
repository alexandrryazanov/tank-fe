import { Column, ObjectWithRequiredId } from "../types";

export interface PassedData<Item extends ObjectWithRequiredId> {
  data?: Item[];
  columns: Column<Item>[];
}
