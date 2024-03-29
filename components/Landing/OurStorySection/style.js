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

export const MobilePreviewWrapper = styled(TVPreviewWrapper)`
  @media (min-width: ${breakPoints_px.STANDARD_DESKTOP_SCREEN}) {
    min-height: 380px;
    min-width: 520px;
  }
  display: flex;
  justify-content: flex-start;
  background-color: blue;
`;

export const PreviewMainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : 0)};
  @media (min-width: ${breakPoints_px.TAB_SCREEN}) {
    justify-content: ${({ position }) => (position ? position : "flex-start")};
    width: 50%;
    margin-bottom: 0;
  }
`;

export const StyledImage = styled(TVImage)``;

export const DownloadWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 0.7rem;
  width: 60%;
  position: absolute;
  z-index: +1;
  top: 70%;
  left: 20%;
  border: 2px solid hsla(0, 0%, 100%, 0.25);
  border-radius: 0.8rem;

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    width: 90%;
    left: 5%;
  }
`;

export const DownloadWrapperLeft = styled.div`
  width: 20%;
`;

export const DownloadWrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
`;
export const DownloadWrapperRight = styled.div`
  width: 15%;
`;

export const ImageThumbnail = styled.img`
  width: 80%;
`;

export const DownloadThumbnail = styled.img`
  width: 100%;
`;
