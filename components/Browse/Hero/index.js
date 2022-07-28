import React, { useEffect } from "react";
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

  //TODO: Need to create a seperate hook to getURL
  const getURL = async () => {
    const result = await Storage.get(`Brooklyn-Nine-Nine_trailer.mp4`, {
      download: false,
      contentType: "video/mp4",
    });
    console.log(result);
  };

  useEffect(() => {
    getURL();
  }, []);

  return (
    <div>
      <HeroContentContainer>
        <HeroImage src={heroImage} layout="fill" />
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
