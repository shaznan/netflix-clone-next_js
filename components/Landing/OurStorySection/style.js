import styled from "styled-components";
import { breakPoints_px } from "../../../constants";
import ReactPlayer from "react-player";

export const TVPreviewWrapper = styled.div`
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    max-width: 90%;
  }
  position: relative;
  height: 300px;
  width: 400px;
`;

export const VideoPlayer = styled.video`
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN_SMALL}) {
    width: 200px;
    height: 300px;
  }
  @media (max-width: ${breakPoints_px.MOBILE}) {
    width: 260px;
    height: 270px;
  }
  position: absolute;
  top: -5px;
  left: 53px;
  width: 292px;
  height: 300px;
`;

export const TVImage = styled.img`
  position: absolute;
  z-index: +1;

  top: 0;
  left: 0;
  width: 400px;
  height: 300px;
`;
