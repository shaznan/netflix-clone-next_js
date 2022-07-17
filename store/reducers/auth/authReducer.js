import { AUTH_SUCCESS, AUTH_ERROR } from "../../actionTypes/auth/authTypes";

const initialState = {
  email: "",
  signUpError: false,
  errorMessage: "",
  isAdmin: false,
};

const signUp = (state = initialState, action) => {
  const { data } = action?.payload;
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, email: data?.username, signUpError: false };
    case AUTH_ERROR:
      return {
        ...state,
        signUpError: true,
        errorMessage: action?.payload?.message,
      };
    default:
      return state;
  }
};

export default signUp;
