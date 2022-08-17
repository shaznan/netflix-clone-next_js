import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import useHandleS3Bucket from "../../hooks/useHandleS3Bucket";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
`;

const videoplayer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const { getBucketUrl } = useHandleS3Bucket();
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

  return (
    <Wrapper>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width="100vw"
        height="100vh"
      />
    </Wrapper>
  );
};

export default videoplayer;
