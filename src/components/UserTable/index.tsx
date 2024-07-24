import React from "react";
import RealTable from "@/components/RealTable";
import { columns } from "./constants";
import { data } from "./mock";
import { Item } from "./types";
import { classes } from "./styles";

//TODO:
// getValueByPath using ✅
// data prop instead of map ✅
// classnames✅ !!!!!  ------ finish
// default styles like a card
// empty state
// loading state

const UsersTable = () => {
  return (
    <RealTable<Item>
      columns={columns}
      data={data}
      dataUnderChildren
      classes={classes}
    >
      <RealTable.Row>
        <RealTable.Col>test1</RealTable.Col>
        <RealTable.Col>test1</RealTable.Col>
        <RealTable.Col>test1</RealTable.Col>
      </RealTable.Row>
    </RealTable>
  );
};

export default UsersTable;
