import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import useScreenSize from "../../../hooks/useScreenSize";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Text } from "../Text/Text";
import Icon from "../Icon/index";
import { Fade } from "../Animation";
import {
  StyledSwiper,
  StyledImageWrapper,
  ImageIconsWrapper,
  MainIconsWrapper,
  DropdownIconWrapper,
  HighlightsWrapper,
  MatchTextWrapper,
  SlideFooter,
  StyledImage,
} from "./styles";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DisplayMovieRow = ({ title, movies, selectMovieHandler }) => {
  //   const [windowDimensions] = useViewport();
  const { width } = useScreenSize();
  const [ThumbnailOnFocus, setThumbnailOnFocus] = useState("");

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
              onMouseEnter={() => setThumbnailOnFocus(key)}
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
