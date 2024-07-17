"use client";

import React, { FormEvent } from "react";
import api from "@/api/axiosInstanse";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const AddPost = () => {
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const tags = formData.get("tags") as string;
    formData.delete("tags");

    const tagsArray = tags.split(",");
    if (tagsArray.length < 2) return toast.error("Введите не меньше 2 тегов");

    tagsArray
      .map((i) => i.trim().replaceAll("#", ""))
      .forEach((tag) => formData.append("tags", tag));

    try {
      await api.post("/posts", formData);
      router.push("/categories/photos");
      toast.success("Пост добавлен!");
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
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
          <tr className={"mb-2"}>
            <td className={"p-2"}>
              <label className={"text-primary"} htmlFor="title">
                Название поста:
              </label>
            </td>
            <td className={"p-2"}>
              <input
                className={
                  "border-2 border-primary rounded-lg text-primary px-2 w-full"
                }
                type="text"
                id="title"
                name="title"
                required
                minLength={10}
                maxLength={30}
              />
            </td>
          </tr>
          <tr className={"mb-2"}>
            <td className={"p-2"}>
              <label className={"text-primary"} htmlFor="title">
                Теги (через запятую):
              </label>
            </td>
            <td className={"p-2"}>
              <input
                className={
                  "border-2 border-primary rounded-lg text-primary px-2 w-full"
                }
                type="text"
                id="tags"
                name="tags"
                required
                minLength={4}
                maxLength={60}
              />
            </td>
          </tr>
          {/*<tr>*/}
          {/*  <td className={"p-2"}>*/}
          {/*    <label className={"text-primary"} htmlFor="description">*/}
          {/*      Описание:*/}
          {/*    </label>*/}
          {/*  </td>*/}
          {/*  <td className={"p-2"}>*/}
          {/*    <textarea*/}
          {/*      className={*/}
          {/*        "border-2 border-primary rounded-lg text-primary px-2 w-[300px] min-h-[150px] resize-none"*/}
          {/*      }*/}
          {/*      id="description"*/}
          {/*      name="description"*/}
          {/*      required*/}
          {/*      minLength={4}*/}
          {/*      maxLength={150}*/}
          {/*    />*/}
          {/*  </td>*/}
          {/*</tr>*/}
          <tr className={"mb-2"}>
            <td className={"p-2"}>
              <label className={"text-primary"} htmlFor="title">
                Файл
              </label>
            </td>
            <td className={"p-2"}>
              <input
                type="file"
                id="images"
                name="images"
                required
                accept="image/*"
              />
            </td>
          </tr>
          <tr>
            <td />
            <td className={"p-2 text-right"}>
              <button
                type={"submit"}
                className={"border-2 rounded-lg px-2 py-1"}
              >
                Создать
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default AddPost;
