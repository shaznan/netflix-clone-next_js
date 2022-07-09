import signUp from "../reducers/signup/signupReducer";
import { combineReducers } from "react-redux";

const appReducer = combineReducers({
  signUp,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
