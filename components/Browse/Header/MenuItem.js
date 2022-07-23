import React from "react";
import { MenuItemWrapper } from "../styles";

export const MenuItem = ({ item, onSelectHandler, selectedMenuItem }) => {
  return (
    <MenuItemWrapper
      active={item === selectedMenuItem}
      onClick={() => onSelectHandler(item)}
    >
      {item}
    </MenuItemWrapper>
  );
};
