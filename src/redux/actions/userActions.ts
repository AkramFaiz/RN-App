import { SET_USER, UPDATE_USER, RESET_USER } from "../../constants";

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

export const updateUser = (user: any) => ({
  type: UPDATE_USER,
  payload: user,
});

export const resetUser = () => ({
  type: RESET_USER,
});
