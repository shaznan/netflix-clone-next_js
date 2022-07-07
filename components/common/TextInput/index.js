import React from "react";
import styled from "styled-components";

const InputGroup = styled.div`
  position: relative;
`;

const InputLabel = styled.label`
  color: #8d8d8d;
  position: absolute;
  top: +20px;
  left: 30px;
  background: #ffffff;
  transition: 300ms;
  transform: translate(-50%, -50%);
`;

const InputField = styled.input`
  outline: none;
  padding: 25px 12px 16px 12px;
  border: 1px solid #dadce0;
  font-size: 12px;

  &:focus {
    border: 2px solid royalblue;
  }

  &:focus ~ ${InputLabel} {
    top: +11px;
    padding: 0 3px;
    font-size: 12px;
    color: royalblue;
    transition: 300ms;
    background-color: pink;
  }

  &:valid ~ ${InputLabel} {
    top: +11px;
    padding: 0 3px;
    font-size: 12px;
    color: royalblue;
    transition: 300ms;
  }

  &:placeholder-shown ~ ${InputLabel} {
    top: +25px;
    padding: 0 3px;
    font-size: 12px;
    color: grey;
    transition: 300ms;
    font-size: 16px;
  }

  &:placeholder {
    color: transparent;
  }
`;

const TextInput = () => {
  return (
    <>
      <InputGroup>
        <InputField placeholder=" " />
        <InputLabel>Email</InputLabel>
      </InputGroup>
    </>
  );
};

export default TextInput;
