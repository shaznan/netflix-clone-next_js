import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Storage } from "aws-amplify";
import Image from "next/image";
import heroImage from "../../../public/images/coverImages/Brooklyn-Nine-Nine/b99_cover_image.png";
import BrooklynLogo from "../../../public/images/coverImages/Brooklyn-Nine-Nine/Brooklyn_Nine-Nine_Logo.png";
import { Fade } from "../../common/Animation";
import { Text } from "../../common/Text/Text";
import { breakPoints_px } from "../../../constants";

const HeroContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
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
  background-color: none;
  position: fixed;
  top: 15vw;
  z-index: +5;

  padding-left: 3.5rem;
  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    padding-left: 1.5rem;
  }
  @media (max-width: ${breakPoints_px.TAB_SCREEN_SMALL}) {
    padding-left: 1rem;
  }
`;

const TitleImage = styled(Image)``;

const TitleImageWrapper = styled.div`
  width: 400px;
  height: auto;
  margin-bottom: 3rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
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
        <HeroBody>
          <LeftContainer>
            <TitleImageWrapper>
              <TitleImage src={BrooklynLogo} />
            </TitleImageWrapper>
            <Text type="secondary" textShadow color="white" left>
              Brilliant but immature Brooklyn detective Jake Peralta must learn
              to follow the rules and be a team player when his squad gets an
              exciting new captian
            </Text>
          </LeftContainer>
        </HeroBody>
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
      </HeroContentContainer>
    </div>
  );
};

export default Hero;
