import React from "react";
import { HeaderProps } from "./types";
import Row from "../Row";
import { ObjectWithRequiredId } from "../types";
import HeaderCol from "./HeaderCol";

const Header = <Item extends ObjectWithRequiredId>({
  columns,
  onFilterChange,
  classNames,
}: HeaderProps<Item>) => {
  return (
    <thead className={classNames?.root}>
      <Row className={classNames?.rows}>
        {columns.map((column) => (
          <HeaderCol key={column.name} className={classNames?.columns}>
            {column.name}
            {column.filter?.((value) => onFilterChange?.(column.name, value))}
          </HeaderCol>
        ))}
      </Row>
    </thead>
  );
};

export default Header;
