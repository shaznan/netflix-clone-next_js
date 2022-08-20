import React, { useEffect, useState } from "react";
import Steps from "../common/Steps";
import { Text } from "../common/Text/Text";
import { Title } from "../common/Title/Title";
import Checkbox from "../common/Checkbox";
import { CheckboxWrapper, StepTwoWrapper } from "./styles";
import { Button } from "../common/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import SnackBar from "../common/SnackBar/index";
import {
  SET_INPUT_EMAIL_ADDRESS,
  SET_PASSWORD,
  SET_IS_INPUT_EMAIL_ERROR,
  SET_IS_INPUT_PASSWORD_ERROR,
  CLEAR_SIGNUP_STATE,
} from "../../store/actionTypes/auth/authTypes";
import EmailAndPasswordForm from "../common/EmailAndPasswordForm";

const SignUpForm = ({ stepCount, setStepCount }) => {
  const dispatch = useDispatch();
  const [checked, setIsChecked] = useState(false);
  const {
    userData,
    isSubmitError,
    submitErrorMsg,
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

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isEmailError && !isPasswordError) {
      signUp(inputEmailAddress, password);
    }
  };

  useEffect(() => {
    Object.keys(userData || {})?.length && setStepCount(3);
  }, [userData]);

  useEffect(() => {
    return () => {
      dispatch({
        type: CLEAR_SIGNUP_STATE,
      });
    };
  }, []);

  const formProps = {
    inputEmailAddress,
    password,
    setEmail,
    setPassword,
    isEmailError,
    isPasswordError,
    setisEmailError,
    setisPasswordError,
    inputType: "signup",
  };

  return (
    <>
      <StepTwoWrapper>
        {isSubmitError && <SnackBar type="error" message={submitErrorMsg} />}
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
        <EmailAndPasswordForm {...formProps} />
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
