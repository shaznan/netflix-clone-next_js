import styled from "styled-components";
import { Swiper } from "swiper/react";
import Image from "next/image";
import { breakPoints_px } from "../../../constants";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2rem;
  position: relative;
  overflow: visible;
`;

export const StyledImageWrapper = styled.div`
  -webkit-transition: all 0.4s 0s ease-in-out;
  -moz-transition: all 0.4s 0s ease-in-out;
  -o-transition: all 0.4s 0s ease-in-out;
  transition: all 0.4s 0s ease-in-out;
  -webkit-box-shadow: 0px 0px 17px 8px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 0px 17px 8px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 17px 8px rgba(0, 0, 0, 0.43);
  cursor: pointer;

  ${({ isFocus }) =>
    isFocus
      ? `&&& {
    position: absolute;
    top: 0;
    z-index: +5;
    transform: scale(1.2);
    @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
        transform: scale(1);
        bottom:0;
        left:0;
        
      }
  }`
      : ""}
`;

export const ImageIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

export const MainIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownIconWrapper = styled.div``;

export const HighlightsWrapper = styled.div`
  display: flex;
  padding: 1rem 1rem 0rem 0.8rem;
`;

export const MatchTextWrapper = styled.div`
  border: 1px solid white;
  padding: 0 0.5rem;
`;

export const SlideFooter = styled.div`
  padding: 1rem 0.7rem 1.2rem 0.7rem;
  background-color: black;
`;

export const StyledImage = styled(Image)`
  border-radius: ${({ active }) => (active ? "5px 5px 0 0" : "5px")};
  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    border-radius: 0;
  }
  opacity: 1;
`;
