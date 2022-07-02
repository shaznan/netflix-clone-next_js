import styled from "styled-components";
import { breakPoints, breakPoints_px } from "../../constants";

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  margin-top: 1.5rem;
  width: 92.5vw;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    width: 90vw;
  }
`;

export const Main = styled.section`
  height: 100vh;
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    height: 70vh;
  }
  width: 100vw;
  background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/271ac55e-7228-438e-824e-92db37981e59/4955baed-5231-4ba5-9914-6da946124c97/LK-en-20220627-popsignuptwoweeks-perspective_alpha_website_large.jpg);
  position: relative;
  z-index: 0;
  &:before {
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.5) 53%,
      rgba(0, 0, 0, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.5) 53%,
      rgba(0, 0, 0, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.5) 53%,
      rgba(0, 0, 0, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */

    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const HeroContainer = styled.div`
  height: 92%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 8px solid #222222;
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90vw;
`;

export const GetStartedWrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;

  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  display: ${(props) => (props.width < breakPoints.TAB_SCREEN ? "flex" : ``)};
  justify-content: ${(props) =>
    props.width < breakPoints.TAB_SCREEN ? "center" : ``};
  margin-top: ${(props) =>
    props.width < breakPoints.TAB_SCREEN ? "1rem" : ``};
`;

export const EmailBar = styled.input.attrs({
  type: "text",
  placeholder: "Email address",
})`
  font-size: 1rem;
  width: ${(props) =>
    props.width > breakPoints.TAB_SCREEN_SMALL
      ? "31rem"
      : props.width > breakPoints.MOBILE_SCREEN
      ? "28rem"
      : props.width < breakPoints.MOBILE_SCREEN
      ? "90vw"
      : ""};
  padding: ${(props) =>
    props?.width < breakPoints.TAB_SCREEN_SMALL
      ? "0.8rem 0 0.8rem 0.5rem"
      : "1.1rem 0 1.1rem 0.5rem"};
`;

export const HeroSlogan = styled.div`
  margin: 0rem 0rem 1.6rem 0rem;

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    margin-top: 1rem;
  }
`;

export const Container = styled.div`
  @media (min-width: ${breakPoints_px.DESKTOP_SMALL}) {
    max-width: 1200px;
    margin: auto;
  }
  width: 100%;
`;

export const SectionContainer = styled.div`
  padding: ${({ padding }) => (padding ? `${padding}rem 4rem` : "2.5rem 4rem")};
  border-bottom: 8px solid #222222;
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    padding: 4rem 2rem;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
  align-items: center;
  @media (min-width: ${breakPoints_px.TAB_SCREEN}) {
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "row"};
  }
  width: 100%;
`;

export const TextWrapper = styled.div`
  width: 100%;
  order: ${(props) => (props.invert ? -1 : 0)};

  @media (min-width: ${breakPoints_px.TAB_SCREEN}) {
    justify-content: flex-start;
    width: 50%;
    order: ${(props) => (props.invert ? 1 : 0)};
  }
`;

export const GetStartedContainer = styled.div`
  margin-top: ${({ mt }) => (mt ? `${mt}rem` : 0)};
`;
