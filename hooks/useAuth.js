import { Auth } from "aws-amplify";
import { AUTH_SUCCESS, AUTH_ERROR } from "../store/actionTypes/auth/authTypes";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();

  async function signUp(username, password) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
        },
      });
      dispatch({
        type: AUTH_SUCCESS,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: {
          message: error.message,
        },
      });
      console.log("error signing up:", error);
    }
  }

  return { signUp };
};

export default useAuth;
