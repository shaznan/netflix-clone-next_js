import React, { useRef, useEffect } from "react";
import { TVPreviewWrapper, VideoPlayer, TVImage } from "./style";

const useRenderImage = () => {
  const videoRef = useRef();

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
  return {
    renderTvPreview,
    renderOfflineShows,
  };
};

export default useRenderImage;
