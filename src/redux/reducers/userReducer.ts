import { SET_USER, UPDATE_USER, RESET_USER } from "../../constants";
const initialState = { data: null };
const userReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, data: action.payload };
    }
    case UPDATE_USER: {
      return { ...state, data: { ...(state.data as any), ...action.payload } };
    }
    case RESET_USER: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
export default userReducer;
