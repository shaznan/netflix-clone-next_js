import React from "react";
import { HeaderWrapper, MenuWrapper } from "../styles";
import Logo from "../../common/Logo/Logo";
import { MenuItem } from "./MenuItem";
import { menuItems } from "../../../constants/data";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo size="medium" />
      <MenuWrapper>
        {menuItems.map((item, key) => (
          <MenuItem key={key} item={item} />
        ))}
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
