import React, { useEffect, useState, useRef, useMemo } from "react";
import ReactPlayer from "react-player/lazy";
import useHandleS3Bucket from "../../hooks/useHandleS3Bucket";
import styled from "styled-components";
import VideoPlayer from "../../components/Browse/VideoPlayer";
import { useRouter } from "next/router";
import { removeUnderScoreFromString } from "../../helper";

const Wrapper = styled.div`
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
`;

const Watch = () => {
  const router = useRouter();
  const [videoUrl, setVideoUrl] = useState("");
  const { getBucketUrl } = useHandleS3Bucket();
  const videoComponent = useRef(null);
  const {
    query: { fileName },
  } = router;

  const isUserAuthenticated = useMemo(
    () => userData?.signInUserSession?.idToken?.jwtToken?.length,
    [JSON.stringify(userData)]
  );

  const fetchBucketUrl = async () => {
    const url = await getBucketUrl(
      `MovieTrailers/${fileName}.mp4`,
      "video/mp4",
      false
    );
    url?.length && setVideoUrl(url);
  };

  useEffect(() => {
    fetchBucketUrl();
  }, [JSON.stringify(router)]);

  const formattedTitle = useMemo(
    () =>
      removeUnderScoreFromString(fileName || "").replace(/(^\w|\s\w)/g, (m) =>
        m.toUpperCase()
      ),
    [fileName]
  );

  if (!isUserAuthenticated) {
    router.push("/");
    return;
  }

  return (
    <Wrapper>
      <VideoPlayer src={videoUrl} ref={videoComponent} title={formattedTitle} />
    </Wrapper>
  );
};

export default Watch;
