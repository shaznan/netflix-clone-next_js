import styled from "styled-components";
import { breakPoints_px } from "../../../constants";

export const HeadingOne = styled.h1`
  font-size: 4rem;
  color: white;
  font-weight: 700;

  @media (max-width: ${breakPoints_px.STANDARD_DESKTOP_SCREEN}) {
    font-size: 3rem;
  }
  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
  }
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
  }
`;

export const HeadingTwo = styled(HeadingOne)`
  font-size: 2.6rem;
`;
