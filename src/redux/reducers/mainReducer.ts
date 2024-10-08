import { combineReducers } from "redux";
import userReducer from "./userReducer";
import moviesReducer from "./movieReducer";

const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
