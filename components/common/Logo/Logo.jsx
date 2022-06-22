import React from "react";
import Image from "next/image";
import NetflixLogo from "../../../public/images/Netflix_logo.png";
import styled from "styled-components";

const RenderImage = ({ className }) => (
  <div className={className}>
    <Image alt="A Logo of Netflix" placeholder="Netflix" src={NetflixLogo} />
  </div>
);

const StyledImage = styled(RenderImage)`
  width: 134px;
  height: 36px;
`;

const Logo = () => {
  return <StyledImage />;
};

export default Logo;
