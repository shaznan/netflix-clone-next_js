import styled from "styled-components";
import { breakPoints_px } from "../../../constants";

export const LevelOne = styled.p`
  font-size: 1.1rem;
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
  color: ${({ color }) => (color ? color : "white")};
  font-weight: regular;
  text-align: ${({ left }) => (left ? "left" : "center")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : 0)};
  text-shadow: ${({ textShadow }) =>
    textShadow ? "2px 2px rgba(0, 0, 0, 0.2)" : none};
`;

export const LevelTwoSmall = styled(LevelTwo)`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.2rem")};
`;

export const LevelThree = styled(LevelTwo)`
  font-size: 1rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ color }) => (color ? color : "white")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : 0)};
  margin-top: ${({ mt }) => (mt ? `${mt}rem` : 0)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    font-size: 0.8rem;
  }
`;

export const LevelFour = styled(LevelThree)`
  font-size: 0.9rem;

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    font-size: 0.7rem;
  }
`;
