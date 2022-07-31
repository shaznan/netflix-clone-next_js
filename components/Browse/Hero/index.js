import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Storage } from "aws-amplify";
import Image from "next/image";
import heroImage from "../../../public/images/coverImages/Brooklyn-Nine-Nine/b99_cover_image.png";
import BrooklynLogo from "../../../public/images/coverImages/Brooklyn-Nine-Nine/Brooklyn_Nine-Nine_Logo.png";
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

const VideoPlayer = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

const HeroBody = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleImage = styled(Image)``;

export const TitleImageWrapper = styled.div`
  width: 400px;
  height: auto;
`;
/**
 * TODO:
 * 1. create multiple hero images and videos
 */

//  "Brilliant but immature Brooklyn detective Jake Peralta must learn to follow the rules and be a team player when his squad gets an exciting new captian"

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
    });

    setVideoUrl(result);
  };

  useEffect(() => {
    getURL();
  }, []);

  const RenderHeroImage = () => (
    <HeroImage src={heroImage} layout="responsive" />
  );

  return (
    <div>
      <HeroContentContainer>
        {!isHeroVideoPlaying &&
          (!showVideoPlayer ? (
            <Fade>{RenderHeroImage()}</Fade>
          ) : (
            RenderHeroImage()
          ))}

        {showVideoPlayer && (
          <VideoPlayer
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
          ></VideoPlayer>
        )}
        <HeroBody>
          <TitleImageWrapper>
            <TitleImage src={BrooklynLogo} />
          </TitleImageWrapper>
        </HeroBody>
      </HeroContentContainer>
    </div>
  );
};

export default Hero;
