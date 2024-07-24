import React from "react";
import { TableProps } from "./types";
import Header from "../Header";
import Row from "../Row";
import HeaderCol from "../HeaderCol";
import styles from "../styles.module.scss";
import Body from "../Body";
import Col from "../Col";
import { ObjectWithRequiredId } from "../types";
import PassedData from "../PassedData";
import clsx from "clsx";

function Table<Item extends ObjectWithRequiredId>({
  children,
  columns,
  data,
  dataUnderChildren,
  classes,
}: TableProps<Item>) {
  return (
    <table className={clsx(styles.table, classes?.table?.root)}>
      <Header>
        <Row>
          {columns.map((column) => (
            <HeaderCol key={column.name}>{column.name}</HeaderCol>
          ))}
        </Row>
      </Header>

      {!!data && dataUnderChildren && children}
      {!!data?.length && <PassedData data={data} columns={columns} />}
      {!!data && !dataUnderChildren && children}
    </table>
  );
}

Table.Body = Body;
Table.Row = Row;
Table.Col = Col;

export default Table;
