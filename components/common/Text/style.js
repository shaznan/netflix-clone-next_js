import styled from "styled-components";
import { breakPoints_px } from "../../../constants";

export const LevelOne = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: regular;
  text-align: ${(props) => (props.center ? "center" : "left")};

  @media (min-width: ${breakPoints_px.MOBILE_SCREEN}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${breakPoints_px.TAB_SCREEN}) {
    font-size: 1.6rem;
  }
`;

export const LevelTwo = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: regular;
  text-align: center;
`;

export const LevelTwoSmall = styled(LevelTwo)`
  font-size: 1.2rem;
`;

export const LevelThree = styled(LevelTwo)`
  font-size: 1rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ color }) => (color ? color : "white")};
`;
