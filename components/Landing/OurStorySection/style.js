import styled from "styled-components";
import { breakPoints_px } from "../../../constants";

export const TVPreviewWrapper = styled.div`
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
`;

export const VideoPreviewWrapper = styled.div`
  margin: 1rem 0rem 0rem 3.2rem;
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    margin: 0;
  }
`;
