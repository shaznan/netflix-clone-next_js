import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Storage } from "aws-amplify";
import Image from "next/image";
import heroImage from "../../../public/images/coverImages/Brooklyn-Nine-Nine/b99_cover_image.png";
import BrooklynLogo from "../../../public/images/coverImages/Brooklyn-Nine-Nine/Brooklyn_Nine-Nine_Logo.png";
import { Fade } from "../../common/Animation";
import { Text } from "../../common/Text/Text";
import { breakPoints_px, breakPoints } from "../../../constants";
import { Button } from "../../common/Button/Button";
import { BsFillPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import useScreenSize from "../../../hooks/useScreenSize";

const HeroContentContainer = styled.div`
  color: white;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.8s;
    background: rgb(20, 20, 20);
    background: linear-gradient(
      0deg,
      rgba(20, 20, 20, 1) 0%,
      rgba(20, 20, 20, 0.17690826330532217) 25%,
      rgba(20, 20, 20, 0.008841036414565795) 51%,
      rgba(20, 20, 20, 0) 65%,
      rgba(20, 20, 20, 0) 100%
    );
    z-index: +1;
  }
`;

const HeroImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const VideoPlayer = styled.video`
  width: 100%;
  display: ${({ active }) => (active ? "inline" : "none")};
  height: auto;
`;

const HeroBody = styled.div`
  display: flex;
  align-items: center;
  background-color: none;
  position: absolute;
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
  width: ${({ isVideoPlaying }) => (isVideoPlaying ? "15vw" : "20vw")};
  height: auto;
  margin-bottom: ${({ isVideoPlaying }) => (isVideoPlaying ? 0 : "3rem")};
  transition: 1s ease-in-out;

  @media (max-width: ${breakPoints_px.TAB_SCREEN_SMALL}) {
    margin-bottom: 0;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const PlayIcon = styled(BsFillPlayFill)`
  font-size: 3rem;

  @media (max-width: ${breakPoints_px.DESKTOP_SMALL}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    font-size: 1rem;
  }
`;
const InfoIcon = styled(BiInfoCircle)`
  font-size: 2rem;
  margin-right: 0.8rem;

  @media (max-width: ${breakPoints_px.DESKTOP_SMALL}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    font-size: 1rem;
  }
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
  const { width } = useScreenSize();

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
            <TitleImageWrapper isVideoPlaying={isHeroVideoPlaying}>
              <TitleImage src={BrooklynLogo} />
            </TitleImageWrapper>
            {!isHeroVideoPlaying && width > breakPoints.TAB_SCREEN_SMALL && (
              <Text type="primary-small" textShadow color="white" left>
                Brilliant but immature Brooklyn detective Jake Peralta must
                learn to follow the rules and be a team player when his squad
                gets an exciting new captian
              </Text>
            )}
            <ButtonWrapper>
              <Button customType="playMain" mr="1">
                <PlayIcon />
                Play
              </Button>
              <Button customType="playSecondary">
                <InfoIcon />
                More Info
              </Button>
            </ButtonWrapper>
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
            onLoadedData={() => {
              setIsHeroVideoPlaying(true);
            }}
            onEnded={() => {
              setIsHeroVideoPlaying(false);
              setShowVideoPlayer(false);
            }}
            active={isHeroVideoPlaying}
          ></VideoPlayer>
        )}
      </HeroContentContainer>
    </div>
  );
};

export default Hero;
