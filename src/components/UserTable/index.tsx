import React from "react";
import RealTable from "@/components/RealTable";
import { columns } from "./constants";
import { data } from "./mock";
import { Item } from "./types";

const getValueByPath = (obj: Record<string, any>, path: string) =>
  path.split(".").reduce((acc: any, key) => acc?.[key], obj);

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
