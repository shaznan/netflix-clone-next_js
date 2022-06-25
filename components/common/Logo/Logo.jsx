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
  width: 180px;
  height: 36px;

  @media (max-width: ${breakPoints_px.STANDARD_DESKTOP_SCREEN}) {
    width: 140px;
  }
  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    width: 110px;
  }
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    width: 105px;
  }
`;

const Logo = () => {
  return <StyledImage />;
};

export default Logo;
