import type { MainClassNames } from "@/components/RealTable";

export const classNames: MainClassNames = {
  table: {
    root: "bg-primary rounded-xl overflow-hidden",
    header: { columns: "odd:bg-danger" },
  },
  data: {
    empty: "text-danger",
    loading: "bg-danger",
    rows: "odd:bg-primary-dark",
    columns: "",
  },
};
