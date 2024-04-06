"use client";

import React, { useContext } from "react";
import AuthForm from "@/components/AuthForm";
import { Box, Button } from "@mui/material";
import { authContext } from "@/contexts/authContext";
import { HOME } from "@/navigation/consts";
import Link from "next/link";

const Auth = () => {
  const { isAuth } = useContext(authContext);

  return (
    <Box
      minHeight={"600px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {isAuth ? (
        <>
          Вы авторизованы
          <Button variant="outlined" color={"inherit"}>
            <Link
              href={HOME}
              style={{ textDecoration: "none", color: "black" }}
            >
              Перейти на Главную страницу
            </Link>
          </Button>
        </>
      ) : (
        <AuthForm />
      )}
    </Box>
  );
};

export default Auth;
