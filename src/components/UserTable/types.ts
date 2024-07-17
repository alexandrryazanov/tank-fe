interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface Job {
  name: string;
  time: string;
}

export interface Item {
  id: number;
  user: User;
  orders: any[];
  job: Job;
}
