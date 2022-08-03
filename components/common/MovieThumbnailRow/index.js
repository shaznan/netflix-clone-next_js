import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import useScreenSize from "../../../hooks/useScreenSize";
import styled from "styled-components";
import { Title } from "../Title/Title";
import Image from "next/image";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const StyledSwiper = styled(Swiper)`
  width: 98vw;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  cursor: pointer;
  transition: all 450ms;
  transform: center left;
  padding-top: 3.5rem;
  padding-bottom: 4rem;
  min-height: 0;
  object-fit: contain;
  &:hover {
    transform: translate3d(6.5rem, 0, 0);
    transform: scale(1.1) !important;
  }
`;

const StyledThumbnailImageWrapper = styled.div`
  height: auto;
  width: 341px;
  object-fit: contain;
  border-radius: 5px;
`;
const DisplayMovieRow = ({
  title = "shaznan",
  isNetflixMovies = "true",
  movies,
  selectMovieHandler,
}) => {
  //   const [windowDimensions] = useViewport();
  const { width } = useScreenSize();

  return (
    <>
      <Title type="main">{title}</Title>
      <StyledSwiper
        navigation={true}
        grabCursor={false}
        draggable={false}
        loop={true}
        loopAdditionalSlides={
          width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2
        }
        breakpoints={{
          1378: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        preventClicksPropagation={true}
        preventClicks={true}
        scrollbar={{ draggable: false, hide: true }}
        slideToClickedSlide={false}
        pagination={{ clickable: true }}
      >
        <StyledSwiperSlide
        //   onClick={() => selectMovieHandler(movie)}
        >
          <StyledThumbnailImageWrapper>
            <Image
              src="https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__+deadToMe.jpg"
              width="346px"
              height="192px"
            />
            <Image
              src="https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__+deadToMe.jpg"
              width="346px"
              height="192px"
            />
            {/* <Image
              src="https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__bigMouth.jpg"
              //   width="100%"
              //   height="100%"
              layout="fixed"
            /> */}
          </StyledThumbnailImageWrapper>
        </StyledSwiperSlide>
      </StyledSwiper>
    </>
  );
};

export default DisplayMovieRow;
