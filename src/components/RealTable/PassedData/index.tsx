import React from "react";
import Body from "../Body";
import Row from "../Row";
import Col from "../Col";
import { getValueByPath } from "../utils";
import { PassedData } from "./types";
import { ObjectWithRequiredId } from "../types";

const PassedData = <Item extends ObjectWithRequiredId>({
  data,
  columns,
}: PassedData<Item>) => {
  return (
    <Body>
      {data.map((row) => (
        <Row key={row.id}>
          {columns.map((column) => (
            <Col key={column.name}>
              {typeof column.accessor === "function"
                ? column.accessor(row)
                : getValueByPath(row, column.accessor)}
            </Col>
          ))}
        </Row>
      ))}
    </Body>
  );
};

export default PassedData;
