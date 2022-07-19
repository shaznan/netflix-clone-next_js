import React, { useEffect, useState } from "react";
import Steps from "../common/Steps";
import { Text } from "../common/Text/Text";
import { Title } from "../common/Title/Title";
import TextInput from "../common/TextInput/index";
import Checkbox from "../common/Checkbox";
import { CheckboxWrapper, StepTwoWrapper } from "./styles";
import { Button } from "../common/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "../common/ErrorMessage";
import useAuth from "../../hooks/useAuth";
import SnackBar from "../common/SnackBar/index";
import {
  SET_INPUT_EMAIL_ADDRESS,
  SET_PASSWORD,
  SET_IS_INPUT_EMAIL_ERROR,
  SET_IS_INPUT_PASSWORD_ERROR,
  CLEAR_SIGNUP_STATE,
} from "../../store/actionTypes/auth/authTypes";
import ActivitySpinner from "../common/ActivitySpinner";

const SignUpForm = ({ stepCount, setStepCount }) => {
  const dispatch = useDispatch();
  const [checked, setIsChecked] = useState(false);
  const {
    email,
    isSignUpError,
    signUpErrorMsg,
    inputEmailAddress,
    inputPassword: password,
    isInputPasswordError: isPasswordError,
    isInputEmailError: isEmailError,
  } = useSelector((state) => state?.Auth);

  const { signUp, isLoading } = useAuth();

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

  const validateEmail = (email) => {
    const emailValidation = String(email)
      .toLowerCase()
      .match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g);

    emailValidation ? setisEmailError(false) : setisEmailError(true);
  };

  const validatePassword = (password) => {
    const passwordValidation = String(password).match(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    );

    passwordValidation ? setisPasswordError(false) : setisPasswordError(true);
  };

  useEffect(() => {
    isEmailError && validateEmail(inputEmailAddress);
  }, [inputEmailAddress, isEmailError]);

  useEffect(() => {
    isPasswordError && validatePassword(password);
  }, [password, isPasswordError]);

  const onSubmit = (e) => {
    if (!isEmailError && !isPasswordError) {
      e.preventDefault();
      signUp(inputEmailAddress, password);
      console.log(email, "email");
      email?.length && setStepCount(3);
    }
  };

  useEffect(() => {
    return () => {
      dispatch({
        type: CLEAR_SIGNUP_STATE,
      });
    };
  }, []);

  return (
    <>
      <StepTwoWrapper>
        {isSignUpError && <SnackBar type="error" message={signUpErrorMsg} />}
        <Steps count={stepCount} total="3" mb="0.5" textAlign="left" />
        <Title type="secondary" color="#333" mb="1">
          Create a password to start your membership
        </Title>
        <Text type="secondary-small" left mb="0.5" color="#333">
          Just a few more steps and you're done!
        </Text>
        <Text type="secondary-small" left color="#333" mb="1">
          We hate paperwork, too.
        </Text>
        <TextInput
          label="Email"
          value={inputEmailAddress}
          onChange={setEmail}
          onBlur={() => validateEmail(inputEmailAddress)}
          borderColor={isEmailError && "red"}
        />
        {isEmailError ? (
          <ErrorMessage color="red" fontSize="14px">
            Please enter a valid email
          </ErrorMessage>
        ) : null}
        <TextInput
          label="Add a password"
          value={password}
          onChange={setPassword}
          mb={isPasswordError ? "0" : "1"}
          mt="1"
          borderColor={isPasswordError && "red"}
          onBlur={() => validatePassword(password)}
        />

        {isPasswordError ? (
          <ErrorMessage
            color="red"
            fontSize="14px"
            mb={isPasswordError ? "1" : "0"}
          >
            Please enter a valid Password
          </ErrorMessage>
        ) : null}
        <CheckboxWrapper>
          <Checkbox checked={checked} setIsChecked={setIsChecked} />
          <Text type="small" color="#333" left>
            Please do not email me Netflix special offers.
          </Text>
        </CheckboxWrapper>
        <Button customType="wide" onClick={onSubmit}>
          Next
        </Button>
      </StepTwoWrapper>
    </>
  );
};

export default SignUpForm;
