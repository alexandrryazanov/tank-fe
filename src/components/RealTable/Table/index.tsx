import React, { useEffect, useState } from "react";
import { TableProps } from "./types";
import Header from "../Header";
import Row from "../Row";
import styles from "../styles.module.scss";
import Body from "../Body";
import Col from "../Col";
import { Column, ObjectWithRequiredId } from "../types";
import PassedData from "../PassedData";
import clsx from "clsx";
import Filters from "../Filters";
import useSelectRows from "@/components/RealTable/hooks/useSelectRows";

function Table<Item extends ObjectWithRequiredId>({
  children,
  columns: initialColumns,
  data,
  dataUnderChildren,
  classNames,
  emptyContent,
  isLoading,
  loadingContent,
  onFilterChange,
  draggableColumns,
  onSelectRows,
}: TableProps<Item>) {
  const [columns, setColumns] = useState<Column<Item>[]>(initialColumns);
  const { isRowsSelectable, selectedRowIds, onRowSelect } = useSelectRows<Item>(
    {
      data,
      onSelectRows,
    }
  );

  const onColumnMove = (dragIndex: number, targetIndex: number) => {
    const newColumns: Column<Item>[] = [];
    for (let i = 0; i < columns.length; i++) {
      if (i === dragIndex) continue;
      if (i === targetIndex) newColumns.push(columns[dragIndex]);
      newColumns.push(columns[i]);
    }
    setColumns(newColumns);
  };

  const passedData = (
    <PassedData
      data={data}
      columns={columns}
      emptyContent={emptyContent}
      classNames={classNames?.data}
      isLoading={isLoading}
      loadingContent={loadingContent}
      isSelectable={isRowsSelectable}
      selectedRowIds={selectedRowIds}
      onRowSelect={onRowSelect}
    />
  );

  return (
    <table className={clsx(styles.table, classNames?.table?.root)}>
      <Header
        columns={columns}
        classNames={classNames?.table?.header}
        onFilterChange={onFilterChange}
        onColumnMove={draggableColumns ? onColumnMove : undefined}
        isSelectable={isRowsSelectable}
      />
      {!dataUnderChildren && passedData}
      {children}
      {dataUnderChildren && passedData}
    </table>
  );
}

Table.Body = Body;
Table.Row = Row;
Table.Col = Col;
Table.Filters = Filters;

export default Table;
