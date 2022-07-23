import React from "react";
import { HeaderWrapper, MenuWrapper } from "../styles";
import Logo from "../../common/Logo/Logo";
import { MenuItem } from "./MenuItem";
import { menuItems } from "../../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { SET_SELECTED_MENU_ITEM } from "../../../store/actionTypes/browse/browseVideosTypes";

const Header = () => {
  const dispatch = useDispatch();
  const { selectedMenuItem } = useSelector((state) => state?.browse);
  const onSelectHandler = (item) => {
    dispatch({
      type: SET_SELECTED_MENU_ITEM,
      payload: item,
    });
  };

  return (
    <HeaderWrapper>
      <Logo size="medium" />
      <MenuWrapper>
        {menuItems.map((item, key) => (
          <MenuItem
            key={key}
            item={item}
            onSelectHandler={onSelectHandler}
            selectedMenuItem={selectedMenuItem}
          />
        ))}
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
