import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { breakPoints_px, breakPoints } from "../../../constants";
import useScreenSize from "../../../hooks/useScreenSize";

const CardContainer = styled.div`
  padding: 2.5rem 4rem;
  border-bottom: 8px solid #222222;
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    padding: 4rem 2rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${breakPoints_px.TAB_SCREEN}) {
    flex-direction: row;
  }
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${breakPoints_px.TAB_SCREEN}) {
    justify-content: flex-start;
    width: 50%;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: ${breakPoints_px.TAB_SCREEN}) {
    justify-content: flex-end;
    width: 50%;
  }
`;

const StoryCard = ({ title, body, renderImage }) => {
  const { width } = useScreenSize();
  return (
    <CardContainer>
      <CardWrapper>
        <TextWrapper>
          <Title type="primary" center={width < breakPoints.TAB_SCREEN}>
            {title}
          </Title>
          <br />
          <Text type="primary" center={width < breakPoints.TAB_SCREEN}>
            {body}
          </Text>
        </TextWrapper>
        <ImageWrapper>{renderImage && renderImage()}</ImageWrapper>
      </CardWrapper>
    </CardContainer>
  );
};

export default StoryCard;