import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className={
        "w-full min-h-[130px] bg-primary rounded-xl p-4 pt-8 m-0 shadow-md flex gap-6 mb-4"
      }
    >
      <Image
        src={"/logo.png"}
        alt={"logo"}
        width={64}
        height={64}
        className={"w-[84px] h-[84px] pt-2"}
      />
      <div className={"w-full"}>
        <div className={"text-5xl"}>Бронеатлас</div>
        <div className={"w-full mt-3 flex justify-between items-center"}>
          <nav className={"flex gap-2 items-center"}>
            <Link href={"/categories/posts"}>Посты</Link>
            <Link href={"/categories/TableTest"}>Т</Link>
          </nav>
          <div className={"flex gap-2 items-center"}>
            <Link href={"/profile"}>Мой профиль</Link>
            <Link
              href={"/categories/posts/add"}
              className={"border rounded-xl border-secondary py-1 px-2"}
            >
              Добавить пост
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
