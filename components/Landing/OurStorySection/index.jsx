import React from "react";
import StoryCard from "../../common/StoryCard";
import Image from "next/image";
import TV from "../../../public/images/ourStory_tv.png";
import ReactPlayer from "react-player";
import { TVPreviewWrapper, ImageWrapper, VideoPreviewWrapper } from "./style";
import { breakPoints } from "../../../constants/index";
import useScreenSize from "../../../hooks/useScreenSize";

const OurStorySection = () => {
  const { width } = useScreenSize();
  const isScreenMobile = width < breakPoints.MOBILE_SCREEN;
  const renderTvPreview = () => (
    <TVPreviewWrapper>
      <ImageWrapper>
        <img
          src="https://netflix-clone-project.s3.amazonaws.com/public-directory/ourStory_tv.png"
          alt="A Logo of Netflix"
          placeholder="Netflix"
        />
      </ImageWrapper>
      <VideoPreviewWrapper>
        <ReactPlayer
          url="https://netflix-clone-project.s3.amazonaws.com/public-directory/video-tv-0819.m4v"
          playing={true}
          loop={true}
          muted={true}
          width={isScreenMobile ? "220px" : "340px"}
          height={isScreenMobile ? "140px" : "280px"}
          // onReady={() => console.log("ready now")}
        />
      </VideoPreviewWrapper>
    </TVPreviewWrapper>
  );

  const storyCardData = [
    {
      title: "Enjoy on your TV.",
      body: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: renderTvPreview,
    },
    // {
    //   title: "Download your shows to watch offline.",
    //   body: "Save your favorites easily and always have something to watch.",
    //   image: renderImage,
    // },
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
    <div>
      {storyCardData.map((item) => {
        const { title, body, image } = item;
        return <StoryCard title={title} body={body} renderImage={image} />;
      })}
    </div>
  );
};

export default OurStorySection;
