import React, { useEffect, useState } from "react";

import { Storage } from "aws-amplify";

import heroImage from "../../../public/images/coverImages/Brooklyn-Nine-Nine/b99_cover_image.png";
import BrooklynLogo from "../../../public/images/coverImages/Brooklyn-Nine-Nine/Brooklyn_Nine-Nine_Logo.png";
import { Fade } from "../../common/Animation";
import { Text } from "../../common/Text/Text";
import { breakPoints } from "../../../constants";
import { Button } from "../../common/Button/Button";

import useScreenSize from "../../../hooks/useScreenSize";
import useHandleS3Bucket from "../../../hooks/useHandleS3Bucket";
import { useRouter } from "next/router";
import {
  HeroContentContainer,
  HeroImage,
  VideoPlayer,
  HeroBody,
  TitleImage,
  TitleImageWrapper,
  LeftContainer,
  ButtonWrapper,
  PlayIcon,
  InfoIcon,
} from "./styles";

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
  const { getBucketUrl } = useHandleS3Bucket();
  const router = useRouter();

  const getHeroCoverVideoUrl = async () => {
    const videoUrl = await getBucketUrl(
      `Brooklyn-Nine-Nine_trailer.mp4`,
      "video/mp4",
      false
    );
    setVideoUrl(videoUrl);
  };

  useEffect(() => {
    getHeroCoverVideoUrl();
  }, []);

  const RenderHeroImage = () => (
    <HeroImage src={heroImage} layout="responsive" />
  );

  const redirectHandler = () => {
    const redirectPath = "/browse/watch";
    //TODO: Need to make fileName dynamic based on which movie is previewing in hero slide
    const fileName = `Brooklyn-Nine-Nine_trailer`;
    router.push(
      {
        pathname: redirectPath,
        query: { fileName },
      },
      redirectPath
    );
  };

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
              <Button customType="playMain" mr="1" onClick={redirectHandler}>
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
