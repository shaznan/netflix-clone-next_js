import React from "react";
import { InputGroup, InputLabel, InputField } from "./styles";

const TextInput = ({ value, onChange, label, mb = 0 }) => {
  return (
    <>
      <InputGroup mb={mb}>
        <InputField
          placeholder=" "
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <InputLabel>{label}</InputLabel>
      </InputGroup>
    </>
  );
};

export default TextInput;
