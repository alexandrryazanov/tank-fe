import { Column } from "@/components/RealTable/types";
import { UserItem } from "./types";
import RealTable from "@/components/RealTable";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const columns: Column<UserItem>[] = [
  {
    name: "ID",
    accessor: "id",
  },
  {
    name: "Firstname",
    accessor: (item) => <div>{item.user.firstName}</div>,
    filter: (onChange) => (
      <RealTable.Filters.ByValue
        onChange={onChange}
        isEnterNecessary
        classNames={{
          input: clsx("bg-warning hover:bg-success", styles.redText),
        }}
      />
    ),
  },
  {
    name: "Lastname",
    accessor: "user.lastName",
    filter: (onChange) => <RealTable.Filters.ByValue onChange={onChange} />,
  },
  {
    name: "Age",
    accessor: "user.age",
    filter: (onChange) => (
      <RealTable.Filters.ByRange
        onChange={onChange}
        classNames={{ inputs: { max: "bg-success" } }}
      />
    ),
  },
];
