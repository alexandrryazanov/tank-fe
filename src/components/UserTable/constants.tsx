import { Column } from "@/components/RealTable/types";
import { Item } from "./types";

export const columns: Column<Item>[] = [
  { name: "ID", accessor: "id" },
  {
    name: "Firstname",
    accessor: (item) => (
      <div style={{ color: "red" }}>{item.user.firstName}</div>
    ),
  },
  { name: "Lastname", accessor: (item) => item.user.lastName },
];
