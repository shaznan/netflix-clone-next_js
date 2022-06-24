import React from "react";
import { HeaderContainer, HeaderWrapper } from "./style";
import Logo from "../common/Logo/Logo";

import { Button } from "../common/Button/Button";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <Button href="/signIn" type="primary">
          Sign In
        </Button>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
