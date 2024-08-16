"use client";

import React, { useCallback } from "react";
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
// filter for column ✅
// onChange onEnter optionally ✅
// other filter components ✅
// add classnames to our filter components ✅
// sort
// pagination
// select rows

const UsersTable = () => {
  const onFilterChange = useCallback((columnName: string, value: any) => {
    console.log(columnName, value);
  }, []);

  return (
    <RealTable<UserItem>
      columns={columns}
      data={data}
      dataUnderChildren
      classNames={classNames}
      emptyContent={"No data"}
      isLoading={false}
      loadingContent={"Loading..."}
      onFilterChange={onFilterChange}
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
