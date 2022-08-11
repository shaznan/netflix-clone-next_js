import React, { useMemo, useState } from "react";
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
import { breakPoints } from "../../../constants/index";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DisplayMovieRow = ({ title, movies, selectMovieHandler }) => {
  const { width } = useScreenSize();
  const [ThumbnailOnFocus, setThumbnailOnFocus] = useState("");

  const slidesPerView = useMemo(
    () =>
      width > breakPoints.STANDARD_DESKTOP_SCREEN
        ? 6
        : width > breakPoints.DESKTOP_SMALL
        ? 5
        : width > breakPoints.TAB_SCREEN
        ? 4
        : width > breakPoints.TAB_SCREEN_SMALL
        ? 3
        : width > breakPoints.MOBILE_SCREEN && 2,
    [width]
  );

  const spaceBetween = useMemo(
    () =>
      width > breakPoints.DESKTOP_SMALL
        ? 10
        : width > breakPoints.TAB_SCREEN
        ? 5
        : 0,
    [width]
  );

  return (
    <>
      <Text type="primary" bold style={{ position: "relative" }}>
        {title}
      </Text>
      <StyledSwiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
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
