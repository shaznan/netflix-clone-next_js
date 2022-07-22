import React, { useEffect } from "react";
import ErrorMessage from "../ErrorMessage";
import TextInput from "../TextInput";

const EmailAndPasswordForm = ({
  inputEmailAddress,
  password,
  setEmail,
  setPassword,
  isEmailError,
  isPasswordError,
  setisEmailError,
  setisPasswordError,
  type,
}) => {
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

  return (
    <>
      <TextInput
        label="Email"
        value={inputEmailAddress}
        onChange={setEmail}
        onBlur={() => validateEmail(inputEmailAddress)}
        borderColor={isEmailError && "red"}
        type={type}
      />
      {isEmailError ? (
        <ErrorMessage
          color={type === "signin" ? "#e87c03" : "red"}
          fontSize="14px"
        >
          Please enter a valid email
        </ErrorMessage>
      ) : null}
      <TextInput
        label="Add a password"
        value={password}
        onChange={setPassword}
        mb={isPasswordError ? "0" : "1"}
        mt="1"
        type={type}
        borderColor={isPasswordError && "red"}
        onBlur={() => validatePassword(password)}
      />
      {isPasswordError ? (
        <ErrorMessage
          color={type === "signin" ? "#e87c03" : "red"}
          fontSize="14px"
          mb={isPasswordError ? "1" : "0"}
        >
          Please enter a valid Password
        </ErrorMessage>
      ) : null}
    </>
  );
};

export default EmailAndPasswordForm;
