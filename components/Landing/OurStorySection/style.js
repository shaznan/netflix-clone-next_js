import styled from "styled-components";
import { breakPoints_px } from "../../../constants";
import ReactPlayer from "react-player";

export const TVPreviewWrapper = styled.div`
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    width: 95%;
    height: 60vw;
  }
  position: relative;
  height: 300px;
  width: 400px;
`;

export const VideoPlayer = styled.video`
  position: absolute;
  top: -2%;
  left: 13%;
  width: 80%;
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
