import React from "react";
import styled from "styled-components";

const InputGroup = styled.div`
  position: relative;
`;

const InputLabel = styled.label`
  color: #8d8d8d;
  position: absolute;
  top: +10px;
  left: 30px;
  background: #ffffff;
  transition: 300ms;
  transform: translate(-50%, -50%);
`;

const InputField = styled.input`
  outline: none;
  padding: 16px 22px;
  border: 1px solid #dadce0;
  font-size: 18px;

  &:focus {
    border: 2px solid royalblue;
  }

  &:valid + ${InputLabel} {
    padding: 0 3px;
    font-size: 14px;
    color: #8d8d8d;
    top: +25px;
  }

  &:focus + ${InputLabel} {
    top: +0px;
    padding: 0 3px;
    font-size: 14px;
    color: royalblue;
    transition: 300ms;
  }
`;

const TextInput = () => {
  return (
    <>
      <InputGroup>
        <InputField />
        <InputLabel>Email</InputLabel>
      </InputGroup>
    </>
  );
};

export default TextInput;
