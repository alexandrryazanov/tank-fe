import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={
        "w-full h-[130px] bg-primary rounded-md p-4 pt-8 m-0 shadow-md"
      }
    >
      <div className={"text-5xl"}>Бронеатлас</div>
      <div className={"mt-3 flex justify-between items-center"}>
        <nav className={"flex gap-2 items-center"}>
          <Link href={"/categories/photos"}>Фото</Link>
          <Link href={"/categories/drawings"}>Чертежи</Link>
          <Link href={"/categories/documents"}>Документы</Link>
          <Link href={"/categories/files"}>Файлы</Link>
        </nav>
        <Link href={"/profile"}>Мой профиль</Link>
      </div>
    </header>
  );
};

export default Header;
