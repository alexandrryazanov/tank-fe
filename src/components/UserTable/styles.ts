import type { MainClassNames } from "@/components/RealTable";

export const classNames: MainClassNames = {
  table: {
    root: "bg-primary rounded-xl overflow-hidden",
    header: { columns: "odd:bg-danger" },
  },
  passedData: {
    empty: "text-danger",
    rows: "odd:bg-primary-dark",
    columns: "",
    loading: "bg-danger",
  },
};
