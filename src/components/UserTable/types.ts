interface User {
  id: number;
  firstName: string;
  lastName: string;
  address: { street: string; city: string };
  age: number;
}

interface Job {
  name: string;
  time: string;
}

export interface UserItem {
  id: number;
  user: User;
  orders: any[];
  job: Job;
}
