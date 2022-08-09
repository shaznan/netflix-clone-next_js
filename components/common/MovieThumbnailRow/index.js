import React, { Component, useState } from "react";
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
import Icon from "../Icon/index";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
`;

const StyledImageWrapper = styled.div`
  transition: all 450ms;
  transform: center left;

  &:hover {
    z-index: +5;
    transform: translate3d(6.5rem, 0, 0);
    transform: scale(1.3) !important;
  }
`;

const ImageIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: black;
`;

const MainIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownIconWrapper = styled.div``;

const HighlightsWrapper = styled.div`
  display: flex;
  padding: 1rem 1rem 0rem 0.8rem;
`;

const MatchTextWrapper = styled.div`
  border: 1px solid white;
  padding: 0 0.5rem;
`;

const SlideFooter = styled.div`
  padding: 1rem 0.7rem 1.2rem 0.7rem;
  background-color: black;
`;

const DisplayMovieRow = ({
  title = "Award-Winning US TV Comedies",
  isNetflixMovies = "true",
  // movies,
  selectMovieHandler,
}) => {
  //   const [windowDimensions] = useViewport();
  const { width } = useScreenSize();
  const [isThumbnailOnFocus, setIsThumbnailOnFocus] = useState(false);

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
            <StyledImageWrapper
              onMouseEnter={() => setIsThumbnailOnFocus(true)}
              onMouseLeave={() => setIsThumbnailOnFocus(false)}
              isFocus={isThumbnailOnFocus}
            >
              <Image src={movie} width="346px" height="192px" />
              <SlideFooter>
                <ImageIconsWrapper>
                  <MainIconsWrapper>
                    <Icon type="play" />
                    <Icon type="plus" />
                    <Icon type="thumbsUp" />
                    <Icon type="thumbsDown" />
                  </MainIconsWrapper>
                  <DropdownIconWrapper>
                    <Icon type="arrowDown" />
                  </DropdownIconWrapper>
                </ImageIconsWrapper>
                <HighlightsWrapper>
                  <Text type="small" bold color="#46d369" mr="0.5">
                    97% Match
                  </Text>
                  <MatchTextWrapper>
                    <Text type="small" bold>
                      16+
                    </Text>
                  </MatchTextWrapper>
                  <Text type="small" bold ml="0.5">
                    7 Seasons
                  </Text>
                </HighlightsWrapper>
              </SlideFooter>
            </StyledImageWrapper>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
};

export default DisplayMovieRow;
