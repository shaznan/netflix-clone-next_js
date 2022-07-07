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
  padding: 20px 12px 16px 12px;
  border: 1px solid #dadce0;
  font-size: 16px;

  &:focus {
    border: 2px solid royalblue;
  }

  //   &:valid ~ ${InputLabel} {
  //     border: 1px solid red;
  //     top: +11px;
  //     padding: 0 3px;
  //     font-size: 12px;
  //     color: royalblue;
  //     transition: 300ms;
  //   }

  &:focus ~ ${InputLabel} {
    top: +11px;
    padding: 0 3px;
    font-size: 12px;
    color: royalblue;
    transition: 300ms;
    background-color: pink;
  }

  &:placeholder-shown ~ ${InputLabel} {
    top: +2px;
    padding: 0 3px;
    font-size: 12px;
    color: royalblue;
    transition: 300ms;
    background-color: yellow;
  }

  //   &:placeholder {
  //     color: transparent;
  //   }
`;

const TextInput = () => {
  return (
    <>
      <InputGroup>
        <InputField placeholder="Emails" />
        <InputLabel>Email</InputLabel>
      </InputGroup>
    </>
  );
};

export default TextInput;
