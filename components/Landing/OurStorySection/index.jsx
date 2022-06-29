import React, { useRef, useEffect } from "react";
import StoryCard from "../../common/StoryCard";
import Image from "next/image";
import TV from "../../../public/images/ourStory_tv.png";
import {
  TVPreviewWrapper,
  VideoPlayer,
  TVImage,
  CardSectionWrapper,
} from "./style";
import { breakPoints } from "../../../constants/index";
import useScreenSize from "../../../hooks/useScreenSize";

const OurStorySection = () => {
  const videoRef = useRef();
  const { width } = useScreenSize();
  const isScreenMobile = width < breakPoints.MOBILE_SCREEN;

  useEffect(() => {
    videoRef.current.play();
  }, []);

  const renderTvPreview = () => (
    <TVPreviewWrapper>
      <TVImage
        src="https://netflix-clone-project.s3.amazonaws.com/public-directory/ourStory_tv.png"
        alt="A Logo of Netflix"
        placeholder="Netflix"
      />
      <VideoPlayer
        ref={videoRef}
        width="500"
        height="240"
        autoplay={true}
        muted
        loop
        src="https://netflix-clone-project.s3.amazonaws.com/public-directory/video-tv-0819.m4v"
      ></VideoPlayer>
    </TVPreviewWrapper>
  );

  const renderOfflineShows = () => {};

  const storyCardData = [
    {
      title: "Enjoy on your TV.",
      body: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: renderTvPreview,
      invert: false,
    },
    {
      title: "Download your shows to watch offline.",
      body: "Save your favorites easily and always have something to watch.",
      image: renderOfflineShows,
      invert: true,
    },
    // {
    //   title: "Watch everywhere.",
    //   body: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    //   image: null,
    // },
    // {
    //   title: "Create profiles for kids.",
    //   body: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    //   image: renderImage,
    // },
  ];

  return (
    <CardSectionWrapper>
      {storyCardData.map((item, key) => {
        const { title, body, image, invert } = item;
        //TODO: NEED to refactor items into spread operator when passing as props
        return (
          <StoryCard
            key={key}
            title={title}
            body={body}
            renderImage={image}
            invert={invert}
          />
        );
      })}
    </CardSectionWrapper>
  );
};

export default OurStorySection;
