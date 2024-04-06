"use client";

import React from "react";
import Header from "../../components/Header";
import { Container } from "@mui/material";
import style from "./styles.module.scss";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <main className={style.main}>
        <Container>{children}</Container>
      </main>
      {/*Footer*/}
    </div>
  );
};

export default MainLayout;
