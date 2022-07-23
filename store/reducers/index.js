import signUp from "../reducers/signup/signupReducer";
import Auth from "./auth/authReducer";
import browse from "./browse/browseVideosReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  signUp,
  Auth,
  browse,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
