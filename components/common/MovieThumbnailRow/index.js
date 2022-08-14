import React, { useMemo, useState, useRef, useEffect } from "react";
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
import useHandleS3Bucket from "../../../hooks/useHandleS3Bucket";
import { Storage } from "aws-amplify";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DisplayMovieRow = ({ title, path, selectMovieHandler }) => {
  console.log(title, "title");
  const { width } = useScreenSize();
  const [ThumbnailOnFocus, setThumbnailOnFocus] = useState("");
  const [showNavigation, setShowNavigation] = useState(false);
  const timerRef = useRef(null);
  const { getBucketUrl } = useHandleS3Bucket();
  const [movieThumbnails, setMovieThumbnails] = useState([]);

  /**
   * once u get result then do a map and call the getURL hook -> return the url to a variable and push that to an array called movies
   */

  //  const getHeroCoverVideoUrl = async () => {
  //   const videoUrl = await getBucketUrl(
  //     `Brooklyn-Nine-Nine_trailer.mp4`,
  //     "video/mp4",
  //     false
  //   );
  //   setVideoUrl(videoUrl);
  // };

  const getThumbnailImages = async (result) => {
    const imageUrlPromises = result?.map(async (fileKey) => {
      return await getBucketUrl(fileKey, "image/jpeg", false);
    });

    const listOfThumbnailImageUrl = await Promise.all(imageUrlPromises);
    console.log(listOfThumbnailImageUrl, "XXX");
    setMovieThumbnails(listOfThumbnailImageUrl);
  };

  //Get list of bucket keys in s3 folder
  const getBucketList = async (path) => {
    console.log(path, "path");
    try {
      Storage.configure({ level: "public" });
      const result = await Storage.list(path);
      getThumbnailImages(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    path?.length && getBucketList(path);
  }, []);

  const slidesPerView = useMemo(
    () =>
      (width > breakPoints.STANDARD_DESKTOP_SCREEN && 6) ||
      (width > breakPoints.DESKTOP_SMALL && 5) ||
      (width > breakPoints.TAB_SCREEN && 4) ||
      (width > breakPoints.TAB_SCREEN_SMALL && 3) ||
      (width > breakPoints.MOBILE_SCREEN && 2) ||
      2,
    [width]
  );

  const spaceBetween = useMemo(
    () =>
      (width > breakPoints.DESKTOP_SMALL && 10) ||
      (width > breakPoints.TAB_SCREEN && 5) ||
      0,
    [width]
  );

  const handleOnMouseEnter = (key) => {
    setShowNavigation(true);
    timerRef.current = setTimeout(() => {
      setThumbnailOnFocus(key);
      setShowNavigation(false);
    }, 500);
  };

  const handleOnMouseLeave = () => {
    timerRef.current && clearTimeout(timerRef.current);
    setThumbnailOnFocus("");
  };

  return (
    <>
      <Text type="primary" bold style={{ position: "relative", zIndex: "1" }}>
        {title}
      </Text>
      <StyledSwiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        slidesPerGroup={slidesPerView}
        loop={true}
        navigation={showNavigation}
        modules={[Pagination, Navigation]}
        className="swiper"
      >
        {movieThumbnails?.map((movie, key) => (
          <SwiperSlide key={key}>
            <StyledImageWrapper
              onMouseEnter={() => handleOnMouseEnter(key)}
              onMouseLeave={handleOnMouseLeave}
              isFocus={ThumbnailOnFocus === key}
            >
              <StyledImage
                src={movie}
                width="346px"
                height="192px"
                active={ThumbnailOnFocus === key}
              />
              {ThumbnailOnFocus === key && (
                <>
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
                </>
              )}
            </StyledImageWrapper>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
};

export default DisplayMovieRow;
