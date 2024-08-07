import { Column } from "@/components/RealTable/types";
import { UserItem } from "./types";
import RealTable from "@/components/RealTable";

export const columns: Column<UserItem>[] = [
  {
    name: "ID",
    accessor: "id",
  },
  {
    name: "Firstname",
    accessor: (item) => <div>{item.user.firstName}</div>,
    filter: (onChange) => <RealTable.Filters.ByValue onChange={onChange} />,
  },
  {
    name: "Lastname",
    accessor: "user.lastName",
    filter: (onChange) => <RealTable.Filters.ByValue onChange={onChange} />,
  },
];
