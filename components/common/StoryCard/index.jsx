import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";

const CardWrapper = styled.div`
  display: flex;
  backgroun-color: blue;
  paddingtop: 2rem;
`;

const TextWrapper = styled.div`
  width: 50%;
`;
const ImageWrapper = styled.div`
  width: 50%;
`;

const StoryCard = ({ title, body, renderImage }) => {
  return (
    <CardWrapper>
      <TextWrapper>
        <Title type="primary">Enjoy on your TV.</Title>
        <Text type="primary">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </Text>
      </TextWrapper>
      <ImageWrapper>{renderImage()}</ImageWrapper>
    </CardWrapper>
  );
};

export default StoryCard;
