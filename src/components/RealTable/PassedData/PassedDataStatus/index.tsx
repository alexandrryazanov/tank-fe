import React from "react";
import Body from "../../Body";
import Row from "../../Row";
import Col from "../../Col";
import styles from "../styles.module.scss";
import clsx from "clsx";
import { PassedDataStatusProps } from "./types";

const PassedDataStatus = ({
  content,
  className,
  colCount,
}: PassedDataStatusProps) => {
  return (
    <Body>
      <Row>
        <Col colSpan={colCount} className={styles.statusCol}>
          <div className={clsx(styles.statusDiv, className)}>{content}</div>
        </Col>
      </Row>
    </Body>
  );
};

export default PassedDataStatus;
