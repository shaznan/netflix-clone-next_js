import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 15vh;
  width: 100vw;
  background-color: #f3f3f3;
  border-top: 1px solid #e6e6e6;
  padding-left: 10%;
  padding-top: 1.2%;
`;

const Footer = ({ theme = "light" }) => {
  return <Wrapper>Footer</Wrapper>;
};

export default Footer;
