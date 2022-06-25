import styled from "styled-components";
import { breakPoints_px } from "../../../constants";

export const LevelOne = styled.p`
  font-size: 1.65rem;
  color: white;
  font-weight: regular;
  text-align: center;

  @media (max-width: ${breakPoints_px.STANDARD_DESKTOP_SCREEN}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
  }
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    font-size: 1.1rem;
  }
`;

export const LevelTwo = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: regular;
  text-align: center;
`;

export const LevelTwoSmall = styled(LevelTwo)`
  font-size: 1rem;
`;
