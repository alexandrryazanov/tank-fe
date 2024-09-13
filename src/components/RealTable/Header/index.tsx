import React from "react";
import { HeaderProps } from "./types";
import Row from "../Row";
import { ObjectWithRequiredId } from "../types";
import HeaderCol from "./HeaderCol";

const Header = <Item extends ObjectWithRequiredId>({
  columns,
  onFilterChange,
  onColumnMove,
  isSelectable,
  classNames,
}: HeaderProps<Item>) => {
  return (
    <thead className={classNames?.root}>
      <Row className={classNames?.rows}>
        <>
          {isSelectable && <HeaderCol>{""}</HeaderCol>}
          {columns.map((column, i) => (
            <HeaderCol
              key={column.name}
              className={classNames?.columns}
              index={i}
              onMove={onColumnMove}
            >
              {column.name}
              {column.filter?.((value) => onFilterChange?.(column.name, value))}
            </HeaderCol>
          ))}
        </>
      </Row>
    </thead>
  );
};

export default Header;
