import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { GoBell } from "react-icons/go";
import { breakPoints, breakPoints_px } from "../../constants/index";
import { MdPlayArrow } from "react-icons/md";

export const MainWrapper = styled.div`
  background-color: black;
  height: 100vh;
`;

//Header styles
export const HeaderWrapper = styled.div`
  display: flex;
  padding: 1.2rem 3.5rem;

  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    padding: 0.8rem 1.5rem;
  }
  @media (max-width: ${breakPoints_px.TAB_SCREEN_SMALL}) {
    padding: 0.8rem 1rem;
  }
  width: 100%;
`;

export const MenuWrapper = styled.div`
  display: flex;
  margin-top: 0.4rem;
  justify-content: space-between;
  margin-left: 1.8rem;
  min-width: 550px;
`;

export const MenuItemWrapper = styled.div`
  color: #e5e5e5;
  font-size: 15px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "none")};
  transition: 0.7s;
`;

export const HeaderItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLeftWrapper = styled.div``;

export const SearchIcon = styled(ImSearch)`
  color: white;
  font-size: 1.3em;
  margin-right: 1.5rem;
`;

export const BellIcon = styled(GoBell)`
  color: white;
  font-size: 1.3em;
`;

//mobile-menu
export const MobileMenuWrapper = styled.div`
  display: flex;
  color: white;
  margin-left: 1.5rem;
  align-items: center;
`;

export const BrowseTextWrapper = styled.div`
  font-size: 10px;
`;

export const ArrowDownIcon = styled(MdPlayArrow)`
  transform: rotate(90deg);
  margin-left: 0.3rem;
`;
