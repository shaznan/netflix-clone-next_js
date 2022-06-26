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
      width="500px"
      height="500px"
    />
  );
  return (
    <div>
      <StoryCard
        title="Enjoy on your TV."
        body="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        renderImage={renderImage}
      />
    </div>
  );
};

export default OurStorySection;
