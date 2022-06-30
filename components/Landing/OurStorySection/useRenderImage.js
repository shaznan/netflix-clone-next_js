import React, { useRef, useEffect } from "react";
import {
  TVPreviewWrapper,
  VideoPlayer,
  ImagePreview,
  MobilePreviewWrapper,
  PreviewMainWrapper,
} from "./style";

const useRenderImage = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);

  const renderTvPreview = () => (
    <PreviewMainWrapper position="flex-end">
      <TVPreviewWrapper>
        <ImagePreview
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
    </PreviewMainWrapper>
  );

  const renderOfflineShows = () => (
    <PreviewMainWrapper position="flex-start" mb="2">
      <MobilePreviewWrapper>
        <ImagePreview
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="A Logo of Netflix"
          placeholder="Netflix"
        />
      </MobilePreviewWrapper>
    </PreviewMainWrapper>
  );
  return {
    renderTvPreview,
    renderOfflineShows,
  };
};

export default useRenderImage;
