import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import useScreenSize from "../../../hooks/useScreenSize";
import styled from "styled-components";
import ImageThumbnail from "./ImageThumbnail";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Text } from "../Text/Text";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
`;

// const StyledSwiperSlide = styled(SwiperSlide)`
//   cursor: pointer;

//   padding-top: 3.5rem;
//   padding-bottom: 4rem;
//   min-height: 0;
//   object-fit: contain;
//   display: flex;

//   //   &:hover {
//   //     transform: translate3d(6.5rem, 0, 0);
//   //     transform: scale(1.1) !important;
//   //   }
// `;

const StyledImageWrapper = styled.div`
  transition: all 450ms;
  transform: center left;

  &:hover {
    z-index: +5;
    transform: translate3d(6.5rem, 0, 0);
    transform: scale(1.3) !important;
  }
`;

const DisplayMovieRow = ({
  title = "Award-Winning US TV Comedies",
  isNetflixMovies = "true",
  // movies,
  selectMovieHandler,
}) => {
  //   const [windowDimensions] = useViewport();
  const { width } = useScreenSize();

  const movies = [
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__+deadToMe.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__bigMouth.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__bigMouth.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__bigMouth.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__bigMouth.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
  ];

  return (
    <>
      <Text type="primary" bold>
        {title}
      </Text>
      <StyledSwiper
        slidesPerView={6}
        spaceBetween={0}
        slidesPerGroup={6}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {movies?.map((movie) => (
          <SwiperSlide>
            <StyledImageWrapper>
              <Image src={movie} width="346px" height="192px" />
            </StyledImageWrapper>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
};

export default DisplayMovieRow;
