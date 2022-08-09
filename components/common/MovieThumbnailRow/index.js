import React, { Component, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";
import useScreenSize from "../../../hooks/useScreenSize";
import styled from "styled-components";
import ImageThumbnail from "./ImageThumbnail";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Text } from "../Text/Text";
import Icon from "../Icon/index";
import { Fade } from "../Animation";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
  position: relative;
  overflow: visible;
`;

const StyledImageWrapper = styled.div`
  -webkit-transition: all 0.2s 0s ease-in-out;
  -moz-transition: all 0.2s 0s ease-in-out;
  -o-transition: all 0.2s 0s ease-in-out;
  transition: all 0.2s 0s ease-in-out;
  -webkit-box-shadow: 0px -2px 25px -7px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 0px -2px 25px -7px rgba(0, 0, 0, 0.65);
  box-shadow: 0px -2px 25px -7px rgba(0, 0, 0, 0.65);

  ${({ isFocus }) =>
    isFocus &&
    `&&& {
    position: absolute;
    top: 0;
    z-index: +5;
    transform: scale(1.2);
    cursor: pointer;
  }`}
`;

const ImageIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
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

const StyledImage = styled(Image)`
  border-radius: ${({ active }) => (active ? "5px 5px 0 0" : "5px")};
  opacity: ${({ active }) => (active ? "1" : "0.9")};
`;

const DisplayMovieRow = ({
  title = "Award-Winning US TV Comedies",
  isNetflixMovies = "true",
  // movies,
  selectMovieHandler,
}) => {
  //   const [windowDimensions] = useViewport();
  const { width } = useScreenSize();
  const [ThumbnailOnFocus, setThumbnailOnFocus] = useState("");

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
        spaceBetween={10}
        slidesPerGroup={6}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper"
      >
        {movies?.map((movie, key) => (
          <SwiperSlide>
            <StyledImageWrapper
              onMouseEnter={
                () => setThumbnailOnFocus(key)
                // setTimeout(() => {
                // }, [100])
              }
              onMouseLeave={() => setThumbnailOnFocus("")}
              isFocus={ThumbnailOnFocus === key}
            >
              <StyledImage
                src={movie}
                width="346px"
                height="192px"
                active={ThumbnailOnFocus === key}
              />
              {ThumbnailOnFocus === key && (
                <Fade>
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
                </Fade>
              )}
            </StyledImageWrapper>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
};

export default DisplayMovieRow;
