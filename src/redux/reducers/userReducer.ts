import { baseActionTypeWithPayload } from "../actions/types";
import { actionsTypes } from "../actions/userActions";
import { defaultStateTypeUser } from "../../types/types";
import { User } from "../../types/types";

const defaultState: defaultStateTypeUser = {
  loggedUser: null,
  users: null,
};

export const userReducer = (
  state = defaultState,
  action: baseActionTypeWithPayload<actionsTypes, any>
) => {
  switch (action.type) {
    case actionsTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
