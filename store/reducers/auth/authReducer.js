import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_INPUT_EMAIL_ADDRESS,
  SET_PASSWORD,
  SET_IS_INPUT_EMAIL_ERROR,
  SET_IS_INPUT_PASSWORD_ERROR,
  CLEAR_SIGNUP_STATE,
} from "../../actionTypes/auth/authTypes";

const initialState = {
  email: "",
  isSignUpError: false,
  signUpErrorMsg: "",
  isAdmin: false,
  name: "",
  inputEmailAddress: "",
  inputPassword: "",
  isInputPasswordError: false,
  isInputEmailError: false,
};

const Auth = (state = initialState, action) => {
  const { data } = action?.payload || {};
  switch (action.type) {
    case SET_PASSWORD:
      return { ...state, inputPassword: action?.payload || "" };
    case SET_IS_INPUT_EMAIL_ERROR:
      return { ...state, isInputEmailError: action?.payload || false };
    case SET_IS_INPUT_PASSWORD_ERROR:
      return { ...state, isInputPasswordError: action?.payload || false };
    case AUTH_SUCCESS:
      return {
        ...state,
        email: action?.payload,
        isSignUpError: false,
        signUpErrorMsg: "",
      };
    case AUTH_ERROR:
      return {
        ...state,
        isSignUpError: true,
        signUpErrorMsg: action?.payload?.message,
      };
    case SET_INPUT_EMAIL_ADDRESS:
      return { ...state, inputEmailAddress: action?.payload || "" };
    case CLEAR_SIGNUP_STATE:
      return {
        ...state,
        isSignUpError: false,
        signUpErrorMsg: "",
        isInputEmailError: false,
        isInputPasswordError: false,
        inputPassword: "",
      };
    default:
      return state;
  }
};

export default Auth;
