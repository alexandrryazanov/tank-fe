"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import RegistrationForm from "@/components/AuthForm/RegistrationForm";
import LoginForm from "@/components/AuthForm/LoginForm";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Box width={400} p={2} sx={{ border: "1px solid", borderRadius: 2 }}>
      <Typography variant={"h4"}>
        {isSignUp ? "Регистрация" : "Вход"}
      </Typography>

      <Box display={"flex"} justifyContent={"end"} mb={2} alignItems={"center"}>
        <Typography variant={"body2"}>
          {isSignUp ? "Уже есть аккаунт?" : "Нужен аккаунт?"}
        </Typography>
        <Button
          variant={"text"}
          size={"small"}
          onClick={() => setIsSignUp((prevState) => !prevState)}
        >
          {isSignUp ? "Вход" : "Регистрация"}
        </Button>
      </Box>

      {isSignUp ? <RegistrationForm /> : <LoginForm />}
    </Box>
  );
};

export default AuthForm;
