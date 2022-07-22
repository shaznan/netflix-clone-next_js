import styled from "styled-components";
import { breakPoints_px } from "../../constants";

export const MainWrapper = styled.div`
height: 100vh;
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
      @media (max-width: ${breakPoints_px.TAB_SCREEN_SMALL}) {
        background-color: black;
      }
      `;

export const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: +1;
`;

export const SignInWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  min-height: 70vh;
  padding: 4rem;

  max-width: 450px;

  @media (max-width: ${breakPoints_px.TAB_SCREEN_SMALL}) {
    max-width: 100vw;
  }
`;

export const CustomTextWrapper = styled.span`
  color: ${({ color }) => (color ? color : "white")};
  cursor: pointer;
`;
