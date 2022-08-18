import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player/lazy";
import useHandleS3Bucket from "../../hooks/useHandleS3Bucket";
import styled from "styled-components";
import VideoPlayer from "../../components/Browse/VideoPlayer";

const Wrapper = styled.div`
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
`;

const Watch = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const { getBucketUrl } = useHandleS3Bucket();
  const videoComponent = useRef(null);
  const fetchBucketUrl = async () => {
    const url = await getBucketUrl(
      "MovieTrailers/Award_Winning_US_TV_Comedies/narcos_mexico_trailer.mp4",
      "video/mp4",
      false
    );
    url?.length && setVideoUrl(url);
  };

  useEffect(() => {
    fetchBucketUrl();
  }, []);

  console.log(videoUrl, "video");

  //TODO:
  //https://github.com/Lucasmg37/react-netflix-player/blob/master/src/components/ReactNetflixPlayer/index.tsx
  return (
    <Wrapper>
      <VideoPlayer src={videoUrl} ref={videoComponent} />
    </Wrapper>
  );
};

export default Watch;
