import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { authContext } from "@/contexts/authContext";
import { Box, Button, Stack, TextField } from "@mui/material";
import { IRegistrationForm } from "@/components/AuthForm/RegistrationForm/types";
import { EMAIL_REGEXP } from "@/components/AuthForm/constants";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<IRegistrationForm>();
  const { registration } = useContext(authContext);

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        message: "Пароль не совпадает",
      });
      return;
    }
    registration(data.name, Number(data.age), data.email, data.password);

    console.log("data", data);
    reset();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            type={"text"}
            label="Имя"
            variant="outlined"
            {...register("name", {
              required: true,
            })}
            error={!!errors?.name}
            helperText={errors?.name?.message}
          />

          <TextField
            type={"number"}
            label="Возраст"
            variant="outlined"
            {...register("age", {
              required: true,
            })}
            error={!!errors.age}
            helperText={errors.age?.message}
          />

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

          <TextField
            type={"password"}
            label="Подтвердите пароль"
            variant="outlined"
            {...register("confirmPassword", {
              required: true,
              minLength: {
                value: 4,
                message: "Minimum 4 symbols",
              },
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />

          <Button type={"submit"} variant="contained">
            Регистрация
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegistrationForm;
