import React from "react";
import StoryCard from "../../common/StoryCard";
import Image from "next/image";
import TV from "../../../public/images/ourStory_tv.png";

const OurStorySection = () => {
  const renderImage = () => (
    <Image
      alt="A Logo of Netflix"
      placeholder="Netflix"
      src={TV}
      width="400px"
      height="300px"
    />
  );

  const storyCardData = [
    {
      title: "Enjoy on your TV.",
      body: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: renderImage,
    },
    {
      title: "Download your shows to watch offline.",
      body: "Save your favorites easily and always have something to watch.",
      image: renderImage,
    },
    {
      title: "Watch everywhere.",
      body: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image: null,
    },
    {
      title: "Create profiles for kids.",
      body: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      image: renderImage,
    },
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
