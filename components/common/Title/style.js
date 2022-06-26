import styled from "styled-components";
import { breakPoints_px } from "../../../constants";

export const HeadingOne = styled.h1`
  font-size: 4rem;
  color: white;
  font-weight: 700;
  text-align: ${(props) => (props?.center ? "center" : "left")};

  @media (max-width: ${breakPoints_px.STANDARD_DESKTOP_SCREEN}) {
    font-size: 3rem;
  }

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    font-size: 1.7rem;
  }
`;

export const HeadingTwo = styled.h1`
  color: white;
  font-weight: 700;
  text-align: ${(props) => (props?.center ? "center" : "left")};
  @media (min-width: ${breakPoints_px.STANDARD_DESKTOP_SCREEN}) {
    font-size: 2.6rem;
  }

  @media (max-width: ${breakPoints_px.STANDARD_DESKTOP_SCREEN}) {
    font-size: 1.6;
  }

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    font-size: 1.2;
  }
`;
