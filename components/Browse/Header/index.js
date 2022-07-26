import React from "react";
import {
  HeaderWrapper,
  MenuWrapper,
  HeaderItemsWrapper,
  HeaderRightWrapper,
  HeaderLeftWrapper,
  SearchIcon,
  BellIcon,
} from "../styles";
import Logo from "../../common/Logo/Logo";
import { MenuItem } from "./MenuItem";
import { menuItems } from "../../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { SET_SELECTED_MENU_ITEM } from "../../../store/actionTypes/browse/browseVideosTypes";
import Avatar from "./Avatar";
import useScreenSize from "../../../hooks/useScreenSize";
import { breakPoints } from "../../../constants";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const dispatch = useDispatch();
  const { selectedMenuItem } = useSelector((state) => state?.browse);
  const onSelectHandler = (item) => {
    dispatch({
      type: SET_SELECTED_MENU_ITEM,
      payload: item,
    });
  };
  const { width } = useScreenSize();

  return (
    <HeaderWrapper>
      <Logo size="medium" />
      <HeaderItemsWrapper>
        {width > breakPoints.TAB_SCREEN ? (
          <HeaderLeftWrapper>
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
          </HeaderLeftWrapper>
        ) : (
          <MobileMenu />
        )}
        <HeaderRightWrapper>
          {width > breakPoints.MOBILE_SCREEN_SMALL && <SearchIcon />}
          <BellIcon />
          <Avatar />
        </HeaderRightWrapper>
      </HeaderItemsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
