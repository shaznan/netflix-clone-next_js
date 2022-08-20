import { BsFillPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import { breakPoints_px } from "../../../constants";
import Image from "next/image";
import styled from "styled-components";

export const HeroContentContainer = styled.div`
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

export const HeroImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export const VideoPlayer = styled.video`
  width: 100%;
  display: ${({ active }) => (active ? "inline" : "none")};
  height: auto;
`;

export const HeroBody = styled.div`
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

export const TitleImage = styled(Image)``;

export const TitleImageWrapper = styled.div`
  width: ${({ isVideoPlaying }) => (isVideoPlaying ? "15vw" : "20vw")};
  height: auto;
  margin-bottom: ${({ isVideoPlaying }) => (isVideoPlaying ? 0 : "3rem")};
  transition: 1s ease-in-out;

  @media (max-width: ${breakPoints_px.TAB_SCREEN_SMALL}) {
    margin-bottom: 0;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

export const PlayIcon = styled(BsFillPlayFill)`
  font-size: 3rem;

  @media (max-width: ${breakPoints_px.DESKTOP_SMALL}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    font-size: 1rem;
  }
`;
export const InfoIcon = styled(BiInfoCircle)`
  font-size: 2rem;
  margin-right: 0.8rem;

  @media (max-width: ${breakPoints_px.DESKTOP_SMALL}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    font-size: 1rem;
  }
`;
