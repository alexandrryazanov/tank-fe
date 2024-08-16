import { UserItem } from "./types";

export const data: UserItem[] = [
  {
    id: 1,
    user: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      address: { street: "Pushkina", city: "NN" },
      age: 30,
    },
    orders: [],
    job: {
      name: "Google",
      time: "365",
    },
  },
  {
    id: 2,
    user: {
      id: 2,
      firstName: "Marc",
      lastName: "Zukerberk",
      address: { street: "Pushkina", city: "NN" },
      age: 25,
    },
    orders: [],
    job: { name: "FB", time: "365" },
  },
  {
    id: 3,
    user: {
      id: 3,
      firstName: "Oleg",
      lastName: "Udenko",
      address: { street: "Pushkina", city: "NN" },
      age: 40,
    },
    orders: [],
    job: { name: "Iteco", time: "75" },
  },
];
