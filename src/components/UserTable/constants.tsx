import { Column } from "@/components/RealTable/types";
import { UserItem } from "./types";

export const columns: Column<UserItem>[] = [
  { name: "ID", accessor: "id" },
  {
    name: "Firstname",
    accessor: (item) => (
      <div style={{ color: "red" }}>{item.user.firstName}</div>
    ),
  },
  { name: "Lastname", accessor: (item) => item.user.lastName },
];
