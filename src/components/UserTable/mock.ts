import { Item } from "./types";

export const data: Item[] = [
  {
    id: 1,
    user: { id: 1, firstName: "John", lastName: "Doe" },
    orders: [],
    job: {
      name: "Google",
      time: "365",
    },
  },
  {
    id: 2,
    user: { id: 2, firstName: "Marc", lastName: "Zukerberk" },
    orders: [],
    job: { name: "FB", time: "365" },
  },
  {
    id: 3,
    user: { id: 3, firstName: "Oleg", lastName: "Udenko" },
    orders: [],
    job: { name: "Iteco", time: "75" },
  },
];
