import React from "react";
import Header from "../../components/common/Header/Header";
import {
  MainWrapper,
  BodyWrapper,
  SignInWrapper,
  CustomTextWrapper,
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
import { Button } from "../../components/common/Button/Button";
import { Text } from "../../components/common/Text/Text";
import Link from "next/link";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const dispatch = useDispatch();
  const { signIn } = useAuth();
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

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isEmailError && !isPasswordError) {
      signIn(inputEmailAddress, password);
      // email?.length && setStepCount(3);
    }
  };

  return (
    <MainWrapper>
      <Header type="signin" />
      <BodyWrapper>
        {isSubmitError && <SnackBar type="error" message={submitErrorMsg} />}
        <SignInWrapper>
          <Title type="secondary" color="white" mb="1.5">
            Sign In
          </Title>
          <EmailAndPasswordForm {...formProps} />
          <Button customType="wide" onClick={onSubmit}>
            Next
          </Button>
          <Text
            textAlign="end"
            mt="0.7"
            type="extra-small"
            color="rgba(255,255,255,0.7)"
          >
            Need help?
          </Text>
          <Text
            textAlign="start"
            mt="0.7"
            type="small"
            color="rgba(255,255,255,0.7)"
          >
            New to Netflix?
            <CustomTextWrapper>
              <Link href="/registration/signup"> Sign up now.</Link>
            </CustomTextWrapper>
          </Text>

          <Text
            textAlign="start"
            mt="0.7"
            type="extra-small"
            color="rgba(255,255,255,0.7)"
          >
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <CustomTextWrapper color="#0071eb"> Learn more.</CustomTextWrapper>
          </Text>
        </SignInWrapper>
      </BodyWrapper>
    </MainWrapper>
  );
};

export default S;
ignin;
