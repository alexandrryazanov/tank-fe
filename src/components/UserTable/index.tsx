import React from "react";
import RealTable from "@/components/RealTable";
import { columns } from "./constants";
import { data } from "./mock";
import { UserItem } from "./types";
import { classNames } from "./styles";

//TODO:
// getValueByPath using ✅
// data prop instead of map ✅
// classnames✅ !!!!!  ------ finish
// default styles like a card
// empty state
// loading state

const UsersTable = () => {
  return (
    <RealTable<UserItem>
      columns={columns}
      data={data}
      dataUnderChildren
      classNames={classNames}
    >
      <RealTable.Body>
        <RealTable.Row>
          <RealTable.Col>test1</RealTable.Col>
          <RealTable.Col>test1</RealTable.Col>
          <RealTable.Col>test1</RealTable.Col>
        </RealTable.Row>
      </RealTable.Body>
    </RealTable>
  );
};

export default UsersTable;
