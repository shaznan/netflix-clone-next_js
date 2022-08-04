import styled from "styled-components";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

const StyledThumbnailImageWrapper = styled.div`
  transition: all 450ms;
  transform: center left;
  &:hover {
    transform: translate3d(6.5rem, 0, 0);
    transform: scale(1.3) !important;
    z-index: +5;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  display: flex;
  //   background: #fff;

  //   /* Center slide text vertically */
  //   display: -webkit-box;
  //   display: -ms-flexbox;
  //   display: -webkit-flex;
  //   display: flex;
  //   -webkit-box-pack: center;
  //   -ms-flex-pack: center;
  //   -webkit-justify-content: center;
  //   justify-content: center;
  //   -webkit-box-align: center;
  //   -ms-flex-align: center;
  //   -webkit-align-items: center;
  //   align-items: center;
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageThumbnail = ({ src, width, height }) => {
  return (
    <StyledSwiperSlide>
      <StyledImage src={src} width={width} height={height} />
    </StyledSwiperSlide>
  );
};

export default ImageThumbnail;
