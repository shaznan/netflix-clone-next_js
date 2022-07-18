import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_INPUT_EMAIL_ADDRESS,
  SET_PASSWORD,
  SET_IS_INPUT_EMAIL_ERROR,
  SET_IS_INPUT_PASSWORD_ERROR,
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
    case AUTH_SUCCESS:
      return {
        ...state,
        email: data?.username,
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
    default:
      return state;
  }
};

export default Auth;
