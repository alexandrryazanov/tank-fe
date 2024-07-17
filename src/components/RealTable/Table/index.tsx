import React from "react";
import { TableProps } from "./types";
import Header from "../Header";
import Row from "../Row";
import HeaderCol from "../HeaderCol";
import styles from "../styles.module.scss";
import Body from "@/components/RealTable/Body";
import Col from "@/components/RealTable/Col";

function Table<Item>({ children, columns }: TableProps<Item>) {
  return (
    <table className={styles.table}>
      <Header>
        <Row>
          {columns.map((column) => (
            <HeaderCol key={column.name}>{column.name}</HeaderCol>
          ))}
        </Row>
      </Header>
      {children}
    </table>
  );
}

Table.Body = Body;
Table.Row = Row;
Table.Col = Col;

export default Table;
