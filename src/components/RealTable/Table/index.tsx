import React from "react";
import { TableProps } from "./types";
import Header from "../Header";
import Row from "../Row";
import styles from "../styles.module.scss";
import Body from "../Body";
import Col from "../Col";
import { ObjectWithRequiredId } from "../types";
import PassedData from "../PassedData";
import clsx from "clsx";
import Filters from "../Filters";

function Table<Item extends ObjectWithRequiredId>({
  children,
  columns,
  data,
  dataUnderChildren,
  classNames,
  emptyContent,
  isLoading,
  loadingContent,
  onFilterChange,
}: TableProps<Item>) {
  const passedData = (
    <PassedData
      data={data}
      columns={columns}
      emptyContent={emptyContent}
      classNames={classNames?.data}
      isLoading={isLoading}
      loadingContent={loadingContent}
    />
  );

  return (
    <table className={clsx(styles.table, classNames?.table?.root)}>
      <Header
        columns={columns}
        classNames={classNames?.table?.header}
        onFilterChange={onFilterChange}
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
