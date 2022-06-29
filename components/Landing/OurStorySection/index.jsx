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
      renderImage: renderTvPreview,
      invert: false,
    },
    {
      title: "Download your shows to watch offline.",
      body: "Save your favorites easily and always have something to watch.",
      renderImage: renderOfflineShows,
      invert: true,
    },
    // {
    //   title: "Watch everywhere.",
    //   body: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    //   renderImage: null,
    // },
    // {
    //   title: "Create profiles for kids.",
    //   body: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    //   renderImage: renderImage,
    // },
  ];

  return (
    <CardSectionWrapper>
      {storyCardData.map((item, key) => {
        return <StoryCard key={key} {...item} />;
      })}
    </CardSectionWrapper>
  );
};

export default OurStorySection;
