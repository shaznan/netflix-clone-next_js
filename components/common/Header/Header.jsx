import React from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderBtnWrapper,
} from "../../Landing/style";
import Logo from "../Logo/Logo";
import { headerTheme } from "../../../constants";

import { Button } from "../Button/Button";

const Header = ({ theme = headerTheme.DARK, type = "" }) => {
  return (
    <HeaderContainer
      borderBottom={theme === headerTheme.LIGHT ? "1px solid #e6e6e6" : ""}
    >
      <HeaderWrapper>
        <Logo />
        {type !== "signin" && (
          <HeaderBtnWrapper>
            <Button
              href="/signin"
              customType={theme === headerTheme.LIGHT ? "simple" : "primary"}
            >
              Sign In
            </Button>
          </HeaderBtnWrapper>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
