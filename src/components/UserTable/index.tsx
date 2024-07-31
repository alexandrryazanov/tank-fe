import React from "react";
import RealTable from "@/components/RealTable";
import { columns } from "./constants";
import { UserItem } from "./types";
import { classNames } from "./styles";
import { data } from "@/components/UserTable/mock";

//TODO:
// getValueByPath using ✅
// data prop instead of map ✅
// empty state ✅
// loading state ✅
// classnames ✅
// default styles like a card
// filter for column (with debounce) - onColumnFilter = (name, value)=>{}

const UsersTable = () => {
  return (
    <RealTable<UserItem>
      columns={columns}
      data={data}
      dataUnderChildren
      classNames={classNames}
      emptyContent={"No data"}
      isLoading={false}
      loadingContent={"Loading..."}
    >
      <RealTable.Body>
        <RealTable.Row>
          <RealTable.Col>test1</RealTable.Col>
          <RealTable.Col className={"bg-success"}>test2</RealTable.Col>
          <RealTable.Col>test3</RealTable.Col>
        </RealTable.Row>
      </RealTable.Body>
    </RealTable>
  );
};

export default UsersTable;
