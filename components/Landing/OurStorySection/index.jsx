import React from "react";
import StoryCard from "../../common/StoryCard";

const OurStorySection = () => {
  const renderImage = () => {};
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
