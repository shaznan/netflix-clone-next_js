import React from "react";
import { HeaderContainer, HeaderWrapper } from "../../Landing/style";
import Logo from "../Logo/Logo";
import { headerTheme } from "../../../constants";

import { Button } from "../Button/Button";

const Header = (theme = headerTheme.LIGHT) => {
  return (
    <HeaderContainer
      borderBottom={theme == headerTheme.LIGHT ? "2px solid black" : ""}
    >
      <HeaderWrapper>
        <Logo />
        <Button href="/signIn" customType="primary">
          Sign In
        </Button>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
