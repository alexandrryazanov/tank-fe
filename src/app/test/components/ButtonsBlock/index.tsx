import { OrderStatus } from "@/app/test/types/orders";
import { Button } from "@nextui-org/button";
import React from "react";

const ButtonsBlock = ({
  onChangeStatus,
}: {
  onChangeStatus: (s: OrderStatus) => void;
}) => {
  return (
    <div className={"flex gap-2 mb-4"}>
      <Button onClick={() => onChangeStatus(OrderStatus.CREATED)}>
        {OrderStatus.CREATED}
      </Button>
      <Button onClick={() => onChangeStatus(OrderStatus.CANCELED)}>
        {OrderStatus.CANCELED}
      </Button>
      <Button onClick={() => onChangeStatus(OrderStatus.PAID)}>
        {OrderStatus.PAID}
      </Button>
      <Button onClick={() => onChangeStatus(OrderStatus.REMOVED)}>
        {OrderStatus.REMOVED}
      </Button>
    </div>
  );
};

export default ButtonsBlock;
