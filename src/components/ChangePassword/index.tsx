"use client";

import React, { FormEvent } from "react";
import api from "@/api/axiosInstanse";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const ChangePassword = () => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isConfirmed = confirm("Вы уверены что хотите изменить пароль");
    if (!isConfirmed) return;

    const formData = new FormData(event.currentTarget);

    const oldPassword = formData.get("oldPassword") as string;
    const newPassword = formData.get("newPassword") as string;

    try {
      await api.post("/users/me/password/change", { oldPassword, newPassword });
      toast.success("Пароль изменен");
    } catch (e) {
      console.log(e);
      const error = e as AxiosError;
      const messageResponse =
        (error?.response?.data as any)?.message || "Что-то пошло не так";
      const message = Array.isArray(messageResponse)
        ? messageResponse.join(", ")
        : messageResponse;

      toast.error(message);
    }
  };

  return (
    <div
      className={
        "md:w-4/12 w-full bg-black-0 rounded-xl shadow-md overflow-hidden p-4"
      }
    >
      <form onSubmit={onSubmit} className={"flex flex-col gap-2  items-start"}>
        <span>Изменить пароль</span>
        <input
          className={
            "border-2 border-primary rounded-lg text-primary px-2 w-full"
          }
          type="password"
          id="oldPassword"
          name="oldPassword"
          placeholder={"Введите старый пароль"}
          required
          minLength={5}
        />
        <input
          className={
            "border-2 border-primary rounded-lg text-primary px-2 w-full"
          }
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder={"Введите новый пароль"}
          required
          minLength={5}
        />
        <button
          type={"submit"}
          className={"px-2 py-1 border-2 rounded-lg mt-2 self-end"}
        >
          Изменить пароль
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
