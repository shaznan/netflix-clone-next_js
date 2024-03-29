import { Auth } from "aws-amplify";
import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  CLEAR_USER_SESSION,
} from "../store/actionTypes/auth/authTypes";
import { useDispatch } from "react-redux";
import { useState } from "react";

const useAuth = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  async function signUp(username, password) {
    setIsLoading(true);
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
        payload: {
          userData: user,
        },
      });
      Object.keys(user)?.length && setIsLoading(false);
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: {
          message: error.message,
        },
      });
      setIsLoading(false);
      console.log("error signing up:", error);
    }
  }

  async function signIn(username, password) {
    try {
      const user = await Auth.signIn(username, password);
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          userData: user,
        },
      });
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  async function signOut() {
    try {
      await Auth.signOut();
      dispatch({
        type: CLEAR_USER_SESSION,
      });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return { signUp, signIn, signOut, isLoading };
};

export default useAuth;
