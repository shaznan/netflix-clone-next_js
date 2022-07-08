import React from "react";
import { InputGroup, InputLabel, InputField } from "./styles";

const TextInput = ({ value, onChangeHandler }) => {
  return (
    <>
      <InputGroup>
        <InputField placeholder=" " value={value} onChange={onChangeHandler} />
        <InputLabel>Email</InputLabel>
      </InputGroup>
    </>
  );
};

export default TextInput;
