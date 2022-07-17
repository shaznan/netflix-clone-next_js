import React, { useEffect, useState } from "react";
import Steps from "../common/Steps";
import { Text } from "../common/Text/Text";
import { Title } from "../common/Title/Title";
import TextInput from "../common/TextInput/index";
import Checkbox from "../common/Checkbox";
import { CheckboxWrapper, StepTwoWrapper } from "./styles";
import { Button } from "../common/Button/Button";
import { useSelector } from "react-redux";
import ErrorMessage from "../common/ErrorMessage";
import useAuth from "../../hooks/useAuth";

const StepTwo = ({ stepCount, setStepCount }) => {
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [password, setPassword] = useState("");
  const [checked, setIsChecked] = useState(false);
  const { inputEmailAddress } = useSelector((state) => state?.signUp);
  const { signUp } = useAuth();

  useEffect(() => {
    if (inputEmailAddress?.length) {
      setEmail(inputEmailAddress);
    }
  }, [inputEmailAddress]);

  const validateEmail = (email) => {
    const emailValidation = String(email)
      .toLowerCase()
      .match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g);

    emailValidation ? setIsEmailError(false) : setIsEmailError(true);
  };

  const validatePassword = (password) => {
    const passwordValidation = String(password).match(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    );

    passwordValidation ? setIsPasswordError(false) : setIsPasswordError(true);
  };

  useEffect(() => {
    isEmailError && validateEmail(email);
  }, [email, isEmailError]);

  useEffect(() => {
    isPasswordError && validatePassword(password);
  }, [password, isPasswordError]);

  const onSubmit = (e) => {
    if (!isEmailError && !isPasswordError) {
      e.preventDefault();
      signUp(email, password);
    }
  };

  return (
    <StepTwoWrapper>
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
        value={email}
        onChange={setEmail}
        onBlur={() => validateEmail(email)}
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
  );
};

export default StepTwo;
