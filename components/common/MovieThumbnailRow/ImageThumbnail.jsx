import styled from "styled-components";
import Image from "next/image";

const StyledThumbnailImageWrapper = styled.div`
  transition: all 450ms;
  transform: center left;
  &:hover {
    transform: translate3d(6.5rem, 0, 0);
    transform: scale(1.3) !important;
    z-index: +5;
  }
`;

const StyledImage = styled(Image)``;

const ImageThumbnail = ({ src, width, height }) => {
  return (
    <StyledThumbnailImageWrapper>
      <StyledImage src={src} width={width} height={height} />
    </StyledThumbnailImageWrapper>
  );
};

export default ImageThumbnail;
