import React from "react";
import Body from "../Body";
import Row from "../Row";
import Col from "../Col";
import { getValueByPath } from "../utils";
import { PassedData } from "./types";
import { ObjectWithRequiredId } from "../types";
import PassedDataStatus from "./PassedDataStatus";

const PassedData = <Item extends ObjectWithRequiredId>({
  data,
  columns,
  emptyContent,
  classNames,
  isLoading,
  loadingContent,
  isSelectable,
  selectedRowIds,
  onRowSelect,
}: PassedData<Item>) => {
  if (isLoading)
    return (
      <PassedDataStatus
        colCount={columns.length}
        className={classNames?.loading}
        content={loadingContent || "Loading..."}
      />
    );

  if (!data) return null;

  if (!data.length && emptyContent)
    return (
      <PassedDataStatus
        colCount={columns.length}
        className={classNames?.empty}
        content={emptyContent}
      />
    );

  return (
    <Body>
      {data.map((row) => (
        <Row key={row.id} className={classNames?.rows}>
          <>
            {isSelectable && (
              <Col>
                <input
                  type="checkbox"
                  checked={!!selectedRowIds?.has(row.id)}
                  onChange={(e) => onRowSelect?.(row.id, e.target.checked)}
                />
              </Col>
            )}
            {columns.map((column) => (
              <Col key={column.name} className={classNames?.columns}>
                {typeof column.accessor === "function"
                  ? column.accessor(row)
                  : getValueByPath(row, column.accessor)}
              </Col>
            ))}
          </>
        </Row>
      ))}
    </Body>
  );
};

export default PassedData;
