import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { authContext } from "@/contexts/authContext";
import { Box, Button, Stack, TextField } from "@mui/material";
import { ILoginForm } from "@/components/AuthForm/LoginForm/types";
import { EMAIL_REGEXP } from "@/components/AuthForm/constants";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginForm>();
  const { login } = useContext(authContext);

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    login(data.email, data.password);
    console.log("data", data);
    reset();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            type={"email"}
            label="Email"
            variant="outlined"
            {...register("email", {
              required: true,
              pattern: {
                value: EMAIL_REGEXP,
                message: "Please enter valid email!",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            type={"password"}
            label="Пароль"
            variant="outlined"
            {...register("password", {
              required: true,
              minLength: {
                value: 4,
                message: "Minimum 4 symbols",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button type={"submit"} variant="contained">
            Вход
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
