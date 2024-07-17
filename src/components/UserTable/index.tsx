import React from "react";
import RealTable from "@/components/RealTable";
import { columns } from "./constants";
import { data } from "./mock";
import { Item } from "./types";

const getValueByPath = (obj: Record<string, any>, path: string) =>
  path.split(".").reduce((acc: any, key) => acc?.[key], obj);

//TODO:
// data prop instead of map
// getValueByPath using
// classnames
// default styles like a card
// empty state
// loading state

const UsersTable = () => {
  return (
    <RealTable<Item> columns={columns}>
      <RealTable.Body>
        {data.map((row) => (
          <RealTable.Row key={row.id}>
            {columns.map((column) => (
              <RealTable.Col key={column.name}>
                {typeof column.accessor === "function"
                  ? column.accessor(row)
                  : String(row[column.accessor])}
              </RealTable.Col>
            ))}
          </RealTable.Row>
        ))}
      </RealTable.Body>
    </RealTable>
  );
};

export default UsersTable;
