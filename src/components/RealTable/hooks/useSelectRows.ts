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
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string | number>>(
    new Set()
  );

  const prevSelectedRowIds = usePrevious(selectedRowIds);

  const onRowSelect = useCallback(
    (itemId: number | string, checked: boolean) => {
      const changedSelectedRowIds = new Set(selectedRowIds);
      if (changedSelectedRowIds.has(itemId)) {
        changedSelectedRowIds.delete(itemId);
      } else {
        changedSelectedRowIds.add(itemId);
      }
      setSelectedRowIds(changedSelectedRowIds);
    },
    [selectedRowIds]
  );

  useEffect(() => {
    if (!onSelectRows || !data || !prevSelectedRowIds) return;
    onSelectRows(data.filter((item) => selectedRowIds.has(item.id)));
  }, [selectedRowIds, onSelectRows, data, prevSelectedRowIds]);

  const isRowsSelectable = !!onSelectRows && !!data;

  return { selectedRowIds, onRowSelect, isRowsSelectable };
};

export default useSelectRows;
