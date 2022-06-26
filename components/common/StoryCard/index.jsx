import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";

const CardContainer = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  padding: 4rem 4rem;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ImageWrapper = styled.div``;

const StoryCard = ({ title, body, renderImage }) => {
  return (
    <CardContainer>
      <CardWrapper>
        <TextWrapper>
          <Title type="primary" center>
            Enjoy on your TV.
          </Title>
          <Text type="primary">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Text>
        </TextWrapper>
        <ImageWrapper>{renderImage()}</ImageWrapper>
      </CardWrapper>
    </CardContainer>
  );
};

export default StoryCard;
