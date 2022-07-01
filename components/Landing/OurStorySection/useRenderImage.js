import React, { useRef, useEffect } from "react";
import {
  TVPreviewWrapper,
  VideoPlayer,
  TVImage,
  MobilePreviewWrapper,
  PreviewMainWrapper,
  StyledImage,
  DownloadWrapper,
  DownloadWrapperLeft,
  DownloadWrapperRight,
  DownloadWrapperCenter,
  ImageThumbnail,
  DownloadThumbnail,
} from "./style";

import { Text } from "../../common/Text/Text";

const useRenderImage = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);

  const renderDownloading = () => (
    <DownloadWrapper>
      <DownloadWrapperLeft>
        <ImageThumbnail
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
          alt="Download thumbnail"
          placeholder="Download Thumbnail"
        />
      </DownloadWrapperLeft>
      <DownloadWrapperCenter>
        <Text type="small" bold mb={0.3}>
          Stranger Things
        </Text>
        <Text type="extra-small" color="#0071eb">
          Downloading...
        </Text>
      </DownloadWrapperCenter>
      <DownloadWrapperRight>
        <DownloadThumbnail
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
          alt="Download Thumbnail"
          placeholder="Download Thumbnail"
        />
      </DownloadWrapperRight>
    </DownloadWrapper>
  );

  const renderTvPreview = () => (
    <PreviewMainWrapper position="flex-end">
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
    </PreviewMainWrapper>
  );

  const renderOfflineShows = () => (
    <PreviewMainWrapper position="flex-start" mb="2">
      <MobilePreviewWrapper>
        <StyledImage
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="Mobile download preview"
          placeholder="Mobile download preview"
        />
        {renderDownloading()}
      </MobilePreviewWrapper>
    </PreviewMainWrapper>
  );

  const renderKidsShow = () => (
    <PreviewMainWrapper position="flex-start" mb="2">
      <MobilePreviewWrapper>
        <StyledImage
          src="https://occ-0-2477-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
          alt="Mobile download preview"
          placeholder="Mobile download preview"
        />
      </MobilePreviewWrapper>
    </PreviewMainWrapper>
  );
  return {
    renderTvPreview,
    renderOfflineShows,
    renderKidsShow,
  };
};

export default useRenderImage;
