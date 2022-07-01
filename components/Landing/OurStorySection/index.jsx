import React from "react";
import StoryCard from "../../common/StoryCard";
import { CardSectionWrapper } from "./style";
import useRenderImage from "./useRenderImage";

const OurStorySection = () => {
  const { renderTvPreview, renderOfflineShows, renderKidsShow } =
    useRenderImage();

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
    {
      title: "Watch everywhere.",
      body: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      renderImage: null,
    },
    {
      title: "Create profiles for kids.",
      body: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      renderImage: renderKidsShow,
      invert: true,
    },
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
