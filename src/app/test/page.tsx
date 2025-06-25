"use client";

import ButtonsBlock from "@/app/test/components/ButtonsBlock";
import { OrderStatus } from "@/app/test/types/orders";
import React, { useState } from "react";

import * as Orders from "./components/orders";

const TestPage = () => {
  const [status, setStatus] = useState<OrderStatus>(OrderStatus.CREATED);

  console.log("test2");

  const OrderComponent = Orders[status];

  console.log("test2");

  return (
    <>
      <ButtonsBlock onChangeStatus={setStatus} />
      <OrderComponent />
    </>
  );
};

export default TestPage;
