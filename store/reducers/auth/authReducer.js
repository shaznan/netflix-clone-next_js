import { AUTH_SUCCESS, AUTH_ERROR } from "../../actionTypes/auth/authTypes";

const initialState = {
  email: "",
  isSignUpError: false,
  signUpErrorMsg: "",
  isAdmin: false,
  name: "",
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
    default:
      return state;
  }
};

export default Auth;
