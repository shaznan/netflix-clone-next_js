import React, { useState } from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  width: 1.5rem; /* Safari and Chrome */
  height: 1.5rem;
  margin-right: 0.5rem;
`;

const Checkbox = ({ checked, setIsChecked }) => {
  return (
    <>
      <StyledCheckbox
        checked={checked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </>
  );
};

export default Checkbox;
