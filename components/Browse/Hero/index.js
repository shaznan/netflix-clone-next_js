import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Storage } from "aws-amplify";
import Image from "next/image";
import heroImage from "../../../public/images/coverImages/b99_cover_image.png";

const HeroContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  opacity: 0.7;
`;

const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

/**
 * TODO:
 * 1. create multiple hero images and videos
 */

const Hero = () => {
  Storage.configure({ level: "public" });
  const [videoUrl, setVideoUrl] = useState(null);
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(true);

  //TODO: Need to create a seperate hook to getURL
  const getURL = async () => {
    const result = await Storage.get(`Brooklyn-Nine-Nine_trailer.mp4`, {
      download: false,
      contentType: "video/mp4",
      expires: 18000,
      progressCallback(progress) {
        console.log(`Downloaded: ${progress.loaded}/${progress.total}`);
      },
    });

    setVideoUrl(result);
  };

  useEffect(() => {
    getURL();
  }, []);

  //   useEffect(() => {
  //     videoRef.current.play();
  //   }, []);
  console.log(videoUrl, "vide url");
  return (
    <div>
      <HeroContentContainer>
        {!isHeroVideoPlaying && (
          <HeroImage src={heroImage} layout="responsive" />
        )}

        {showVideoPlayer && (
          <video
            muted
            autoPlay
            src={videoUrl}
            preload={"auto"}
            type={"video/mp4"}
            onLoadedData={() => setIsHeroVideoPlaying(true)}
            onEnded={() => {
              setIsHeroVideoPlaying(false);
              setShowVideoPlayer(false);
            }}
            //   onLoadEnd={(e) => console.log(e, "ended")}
            // className={classes.video}
            // ref={ref => this.headerVideo}
          ></video>
        )}
        {/* <Image
          src="https://netflix-clone-project.s3.amazonaws.com/public-directory/Devices.png"
          width="250"
          height="70"
        /> */}
      </HeroContentContainer>
    </div>
  );
};

export default Hero;

// ref={videoRef}
// width="500"
// height="240"
// autoplay={true}
// muted
// loop
// src="https://netflix-clone-project.s3.amazonaws.com/public-directory/video-tv-0819.m4v"
