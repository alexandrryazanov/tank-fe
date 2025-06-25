"use client";

import ButtonsBlock from "@/app/test/components/ButtonsBlock";
import { OrderStatus } from "@/app/test/types/orders";
import React, { useState } from "react";

import * as Orders from "./components/orders";

const TestPage = () => {
  const [status, setStatus] = useState<OrderStatus>(OrderStatus.CREATED);

  const OrderComponent = Orders[status];

  return (
    <>
      <ButtonsBlock onChangeStatus={setStatus} />
      <OrderComponent />
    </>
  );
};

export default TestPage;
