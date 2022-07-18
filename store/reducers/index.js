import signUp from "../reducers/signup/signupReducer";
import Auth from "./auth/authReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  signUp,
  Auth,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
