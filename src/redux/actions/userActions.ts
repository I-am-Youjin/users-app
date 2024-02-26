import { baseActionTypeWithPayload } from "./types";

export enum actionsTypes {
  SET_USER = "SET_USER",
}

interface IUserActions {
  setUser: (user: any) => baseActionTypeWithPayload<actionsTypes.SET_USER, any>;
}

export const userActions: IUserActions = {
  setUser: (user) => ({ type: actionsTypes.SET_USER, payload: user }),
};
