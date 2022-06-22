import React from "react";
import { HeaderContainer, HeaderWrapper } from "./style";
import Logo from "../common/Logo/Logo";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div>
          <Logo />
        </div>
        <div>Second</div>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
