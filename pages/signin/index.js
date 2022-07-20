import React from "react";
import Header from "../../components/common/Header/Header";
import {
  MainWrapper,
  BodyWrapper,
  SignInWrapper,
} from "../../components/SignIn/styles";
import { Title } from "../../components/common/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_INPUT_EMAIL_ADDRESS,
  SET_PASSWORD,
  SET_IS_INPUT_EMAIL_ERROR,
  SET_IS_INPUT_PASSWORD_ERROR,
  CLEAR_SIGNUP_STATE,
} from "../../store/actionTypes/auth/authTypes";
import SnackBar from "../../components/common/SnackBar";
import EmailAndPasswordForm from "../../components/common/EmailAndPasswordForm";

const signin = () => {
  const dispatch = useDispatch();
  const {
    email,
    isSubmitError,
    submitErrorMsg,
    inputEmailAddress,
    inputPassword: password,
    isInputPasswordError: isPasswordError,
    isInputEmailError: isEmailError,
  } = useSelector((state) => state?.Auth);

  const setEmail = (email) => {
    dispatch({
      type: SET_INPUT_EMAIL_ADDRESS,
      payload: email,
    });
  };

  const setPassword = (password) => {
    dispatch({
      type: SET_PASSWORD,
      payload: password,
    });
  };

  const setisPasswordError = (payload) => {
    dispatch({
      type: SET_IS_INPUT_PASSWORD_ERROR,
      payload,
    });
  };

  const setisEmailError = (payload) => {
    dispatch({
      type: SET_IS_INPUT_EMAIL_ERROR,
      payload,
    });
  };

  const formProps = {
    inputEmailAddress,
    password,
    setEmail,
    setPassword,
    isEmailError,
    isPasswordError,
    setisEmailError,
    setisPasswordError,
    type: "signin",
  };

  return (
    <MainWrapper>
      <Header type="signin" />
      <BodyWrapper>
        {isSubmitError && <SnackBar type="error" message={submitErrorMsg} />}
        <SignInWrapper>
          <Title type="secondary" color="white" mb="1">
            Sign In
          </Title>
          <EmailAndPasswordForm {...formProps} />
        </SignInWrapper>
      </BodyWrapper>
    </MainWrapper>
  );
};

export default signin;
