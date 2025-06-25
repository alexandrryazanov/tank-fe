"use client";

import ButtonsBlock from "@/app/test/components/ButtonsBlock";
import { OrderStatus } from "@/app/test/types/orders";
import React, { useState } from "react";

const TestPage = () => {
  const [orderStatus, setOrderStatus] = useState<OrderStatus>();

  return (
    <>
      <ButtonsBlock onChangeStatus={setOrderStatus} />
      <div>{orderStatus}</div>
    </>
  );
};

export default TestPage;
