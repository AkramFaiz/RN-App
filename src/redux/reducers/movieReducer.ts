import { SET_MOVIES } from "../../constants";

const initialState = { data: null };
const moviesReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case SET_MOVIES: {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default moviesReducer;
