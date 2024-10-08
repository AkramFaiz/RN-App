const labels = {
  mobileNumberPlaceholder: "Enter mobile number",
  passwordPlaceholder: "Enter password",
  clearButton: "Clear",
  submitButton: "Submit",
  signUpMessage: "Do not have an account, ",
  signUpLink: "sign up",
};
const initialFields = { mobileNumber: "", password: "" };

const signUpLabels = {
  ...labels,
  confirmPasswordPlaceholder: "Re-enter password",
  name: "Enter name",
  city: "Enter city"
};
const signUpInitialFields = {
  ...initialFields,
  confirmPassword: "",
  name: "",
  city: "",
  email: "",
};
const changePswdLabels = {
  passwordPlaceholder: "Enter password",
  confirmPasswordPlaceholder: "Re-enter password",
};

const movieListLabels = {
  heading: "List of Movies",
  searchPlaceholder: "Search by title of movie.",
  loading: "Loading...",
};

const profileLabels = {
  mobileNumberFieldLabel: "Mobile number:",
  mobileNumber: "Enter mobile number",
  nameFieldLabel: "Name:",
  name: "Enter name",
  cityFieldLabel: "City:",
  city: "Enter city",
  resetButton: "Reset",
  submitButton: "Submit",
};

export {
  labels,
  initialFields,
  signUpLabels,
  signUpInitialFields,
  movieListLabels,
  changePswdLabels,
  profileLabels
};

export const SET_USER = "USER/SET_USER";
export const UPDATE_USER = "USER/UPDATE_USER";
export const RESET_USER = "USER/RESET_USER";
export const SET_MOVIES = "MOVIES/SET_MOVIES";
