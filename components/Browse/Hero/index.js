import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Storage } from "aws-amplify";
import Image from "next/image";
import heroImage from "../../../public/images/coverImages/b99_cover_image.png";
import { Fade } from "../../common/Animation";

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

  return (
    <div>
      <HeroContentContainer>
        {!isHeroVideoPlaying &&
          (!showVideoPlayer ? (
            <Fade>
              <HeroImage src={heroImage} layout="responsive" />
            </Fade>
          ) : (
            <HeroImage src={heroImage} layout="responsive" />
          ))}

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
          ></video>
        )}
      </HeroContentContainer>
    </div>
  );
};

export default Hero;
