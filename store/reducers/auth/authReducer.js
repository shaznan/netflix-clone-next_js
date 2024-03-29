import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_INPUT_EMAIL_ADDRESS,
  SET_PASSWORD,
  SET_IS_INPUT_EMAIL_ERROR,
  SET_IS_INPUT_PASSWORD_ERROR,
  CLEAR_SIGNUP_STATE,
  CLEAR_USER_SESSION,
} from "../../actionTypes/auth/authTypes";

//TODO: Implement protected routes:  https://dev.to/seven/how-to-implement-protected-routes-in-nextjs-1m50
const initialState = {
  userData: null,
  isSubmitError: false,
  submitErrorMsg: "",
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
        userData: action?.payload?.userData || null,
        isSubmitError: false,
        submitErrorMsg: "",
      };
    case AUTH_ERROR:
      return {
        ...state,
        isSubmitError: true,
        submitErrorMsg: action?.payload?.message,
      };
    case SET_INPUT_EMAIL_ADDRESS:
      return { ...state, inputEmailAddress: action?.payload || "" };
    case CLEAR_SIGNUP_STATE:
      return {
        ...state,
        isSubmitError: false,
        submitErrorMsg: "",
        isInputEmailError: false,
        isInputPasswordError: false,
        inputPassword: "",
        inputEmailAddress: "",
      };
    case CLEAR_USER_SESSION:
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

export default Auth;
