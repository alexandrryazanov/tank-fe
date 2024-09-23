"use client";

import TagsList from "@/components/TagsList";
import Search from "@/components/Search";

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"flex gap-4"}>
      <div className={"flex flex-col gap-4"}>
        <Search onEnter={(value) => console.log("value", value)} />
        <TagsList />
      </div>
      {children}
    </div>
  );
}
