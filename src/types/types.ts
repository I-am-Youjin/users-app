export type User = {
  username: string;
  email: string;
  lastLogin: string;
  status: string;
  uid: string;
};

export type defaultStateTypeUser = Record<
  "loggedUser" | "users",
  User | null | User[]
>;
