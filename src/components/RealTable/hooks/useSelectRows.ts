import { useCallback, useEffect, useState } from "react";
import { ObjectWithRequiredId } from "../types";
import usePrevious from "@/components/RealTable/hooks/usePrevious";

const useSelectRows = <Item extends ObjectWithRequiredId>({
  data,
  onSelectRows,
}: {
  onSelectRows: ((rows: Item[]) => void) | undefined;
  data: Item[] | undefined;
}) => {
  const [selectedRows, setSelectedRows] = useState<
    Record<string | number, Item>
  >({});

  const prevSelectedRowIds = usePrevious(selectedRows);

  const onRowSelect = useCallback((item: Item) => {
    setSelectedRows((prev) => {
      const newRows = { ...prev };
      if (newRows[item.id]) delete newRows[item.id];
      else newRows[item.id] = item;
      return newRows;
    });
  }, []);

  useEffect(() => {
    if (!onSelectRows || !data || !prevSelectedRowIds) return;
    onSelectRows(Object.values(selectedRows));
  }, [selectedRows, onSelectRows, data, prevSelectedRowIds]);

  const isRowsSelectable = !!onSelectRows && !!data;

  return { selectedRows, onRowSelect, isRowsSelectable };
};

export default useSelectRows;
