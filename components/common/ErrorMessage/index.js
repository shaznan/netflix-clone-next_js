import React from "react";
import styled from "styled-components";

const Error = styled.p`
  color: ${({ color }) => (color ? color : "red")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16x")};
  margin-top: ${({ mt }) => (mt ? `${mt}rem` : "0")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : "0")};
`;
// color, fontSize, mt, mb
const ErrorMessage = (props) => {
  return <Error {...props} />;
};

export default ErrorMessage;
