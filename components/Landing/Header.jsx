import React from "react";
import { HeaderContainer, HeaderWrapper } from "./style";
import Logo from "../common/Logo/Logo";

import { PrimaryButton } from "../common/Button/Button";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <PrimaryButton text="Sign in" href="/signIn" />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
