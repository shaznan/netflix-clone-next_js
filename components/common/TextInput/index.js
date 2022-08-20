import React from "react";
import { InputGroup, InputLabel, InputField } from "./styles";

const TextInput = ({
  value,
  onChange,
  label,
  mb = 0,
  mt = 0,
  type,
  ...props
}) => {
  return (
    <>
      <InputGroup mb={mb} mt={mt}>
        <InputField
          placeholder=" "
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
        <InputLabel>{label}</InputLabel>
      </InputGroup>
    </>
  );
};

export default TextInput;
