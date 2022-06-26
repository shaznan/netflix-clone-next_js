import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";

const CardWrapper = styled.div`
  display: flex;
`;

const StoryCard = ({ title, body, renderImage }) => {
  return (
    <CardWrapper>
      <Title type="primary">Enjoy on your TV.</Title>
      <Text type="primary">
        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
        players, and more.
      </Text>
    </CardWrapper>
  );
};

export default StoryCard;
