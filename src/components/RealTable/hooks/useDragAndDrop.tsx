import React, { useCallback } from "react";

const useDragAndDrop = ({
  index,
  indexDataAttribute = "data-index",
  dragEnterClassName,
  onElementDrop,
}: {
  index?: number;
  indexDataAttribute?: string;
  dragEnterClassName: string;
  onElementDrop?: (dragIndex: number, targetIndex: number) => void;
}) => {
  // start dragging
  const onDragStart = useCallback(
    (e: React.DragEvent<HTMLTableCellElement>) => {
      e.dataTransfer.setData("dragIndex", String(index));
    },
    [index]
  );

  // drop to target
  const onDrop = useCallback(
    (e: React.DragEvent<HTMLTableCellElement>) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLTableCellElement;
      target.classList.remove(dragEnterClassName);
      const dragIndex = Number(e.dataTransfer.getData("dragIndex"));
      const targetIndex = Number(target.getAttribute(indexDataAttribute));

      if (dragIndex === targetIndex) return;
      onElementDrop?.(dragIndex, targetIndex);
    },
    [dragEnterClassName, indexDataAttribute, onElementDrop]
  );

  // element is above the target ✅
  const onDragEnter = useCallback(
    (e: React.DragEvent<HTMLTableCellElement>) => {
      const target = e.currentTarget as HTMLTableCellElement;
      target.classList.add(dragEnterClassName);
    },
    [dragEnterClassName]
  );

  // element left the target ✅
  const onDragLeave = useCallback(
    (e: React.DragEvent<HTMLTableCellElement>) => {
      const target = e.currentTarget as HTMLTableCellElement;
      target.classList.remove(dragEnterClassName);
    },
    [dragEnterClassName]
  );

  // element is above the target for some ms ✅
  const onDragOver = useCallback((e: React.DragEvent<HTMLTableCellElement>) => {
    e.preventDefault(); // так допускаем сброс сюда
    e.dataTransfer.dropEffect = "move";
  }, []);

  return {
    draggable: !!onElementDrop,
    [indexDataAttribute]: index,
    onDrop,
    onDragStart,
    onDragEnter,
    onDragLeave,
    onDragOver,
  };
};

export default useDragAndDrop;
