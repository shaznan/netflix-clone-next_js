import { Auth } from "aws-amplify";
import { AUTH_SUCCESS, AUTH_ERROR } from "../store/actionTypes/auth/authTypes";
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
        payload: user?.username,
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

  return { signUp, isLoading };
};

export default useAuth;
