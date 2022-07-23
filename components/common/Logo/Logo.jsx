import React from "react";
import Image from "next/image";
import NetflixLogo from "../../../public/images/Netflix_logo.png";
import styled from "styled-components";
import { breakPoints_px } from "../../../constants";

const RenderImage = ({ className }) => (
  <div className={className}>
    <Image alt="A Logo of Netflix" placeholder="Netflix" src={NetflixLogo} />
  </div>
);

const StyledImage = styled(RenderImage)`
  max-width: ${({ size }) => (size === "medium" ? "100px" : "180px")};
  height: ${({ size }) => (size === "medium" ? "20px" : "36px")};

  @media (max-width: ${breakPoints_px.STANDARD_DESKTOP_SCREEN}) {
    width: ${({ size }) => (size === "medium" ? "120px" : "140px")};
  }
  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    width: ${({ size }) => (size === "medium" ? "90px" : "110px")};
  }
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    width: ${({ size }) => (size === "medium" ? "70px" : "95px")};
  } ;
`;

const Logo = ({ size = "large" }) => {
  return <StyledImage size={size} />;
};

export default Logo;
