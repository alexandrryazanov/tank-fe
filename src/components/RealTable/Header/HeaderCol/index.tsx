import React from "react";
import { HeaderColProps } from "./types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import useDragAndDrop from "../../hooks/useDragAndDrop";

const HeaderCol = ({
  children,
  className,
  index,
  onMove,
  ...thProps
}: HeaderColProps) => {
  const dragProps = useDragAndDrop({
    index,
    dragEnterClassName: styles["HeaderCol--onDraggedCol"],
    indexDataAttribute: "data-index",
    onElementDrop: onMove,
  });

  return (
    <th
      {...thProps}
      {...dragProps}
      className={clsx(
        styles["HeaderCol"],
        onMove && styles["HeaderCol--draggable"],
        className
      )}
    >
      {children}
    </th>
  );
};

export default HeaderCol;
