"use client";

import { OrderStatus } from "@/app/test/types/orders";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";

const TestPage = (props: any) => {
  const [orderStatus, setOrderStatus] = useState<OrderStatus>();
  return (
    <>
      <div className={"flex gap-2 mb-4"}>
        <Button onClick={() => setOrderStatus(OrderStatus.CREATED)}>
          {OrderStatus.CREATED}
        </Button>
        <Button onClick={() => setOrderStatus(OrderStatus.CANCELED)}>
          {OrderStatus.CANCELED}
        </Button>
        <Button onClick={() => setOrderStatus(OrderStatus.PAID)}>
          {OrderStatus.PAID}
        </Button>
        <Button onClick={() => setOrderStatus(OrderStatus.REMOVED)}>
          {OrderStatus.REMOVED}
        </Button>
      </div>

      <div>{orderStatus}</div>
    </>
  );
};

export default TestPage;
