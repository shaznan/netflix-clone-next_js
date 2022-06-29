import styled from "styled-components";
import { breakPoints_px } from "../../../constants";

export const CardSectionWrapper = styled.div``;

export const TVPreviewWrapper = styled.div`
  @media (min-width: ${breakPoints_px.MOBILE_SCREEN}) {
    width: 70%;
    height: 43vw;
  }
  @media (min-width: ${breakPoints_px.TAB_SCREEN}) {
    width: 420px;
    height: 320px;
  }
  @media (min-width: ${breakPoints_px.DESKTOP_SMALL}) {
    width: 420px;
    height: 320px;
  }
  @media (min-width: ${breakPoints_px.STANDARD_DESKTOP_SCREEN}) {
    min-width: 500px;
    min-height: 400px;
  }
  position: relative;
  width: 100%;
  height: 60vw;
`;

export const VideoPlayer = styled.video`
  position: absolute;
  top: -2%;
  left: 13%;
  width: 82%;
  height: 100%;
`;

export const TVImage = styled.img`
  position: absolute;
  z-index: +1;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
