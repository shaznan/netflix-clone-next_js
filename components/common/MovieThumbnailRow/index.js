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
import { useRouter } from "next/router";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DisplayMovieRow = ({ title, path, selectMovieHandler }) => {
  const { width } = useScreenSize();
  const router = useRouter();
  const [ThumbnailOnFocus, setThumbnailOnFocus] = useState("");
  const [showNavigation, setShowNavigation] = useState(false);
  const timerRef = useRef(null);
  const { getBucketUrl } = useHandleS3Bucket();
  const [movieThumbnails, setMovieThumbnails] = useState([]);

  const getThumbnailImages = async (result) => {
    const customResult = result.map(({ key }) => key);
    const imageUrlPromises = customResult?.map(async (fileKey) => {
      return await getBucketUrl(fileKey, "image/jpeg", false);
    });

    const listOfThumbnailImageUrl = await Promise.all(imageUrlPromises);
    setMovieThumbnails(listOfThumbnailImageUrl);
  };

  //Get list of bucket keys in s3 folder
  const getBucketList = async (path) => {
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

  const getMovieInfoFromUrl = (url) => {
    const splitUrl = url.split("/");
    const fileKey = splitUrl[6].split(".")[0];
    return fileKey.split("___")[0];
  };

  const navigateHandler = (movieUrl) => {
    console.log("hello");

    const redirectPath = "/browse/watch";
    const fileName = getMovieInfoFromUrl(movieUrl);
    router.push(
      {
        pathname: redirectPath,
        query: { fileName },
        // shallow: true,
      },
      redirectPath
    );
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
                        <Icon
                          type="play"
                          onClick={() => navigateHandler(movie)}
                        />
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
