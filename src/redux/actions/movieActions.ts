import { SET_MOVIES } from "../../constants";

export const setMovies = (movies: any) => ({
  type: SET_MOVIES,
  payload: movies,
});
