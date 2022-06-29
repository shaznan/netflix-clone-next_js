import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { breakPoints_px } from "../../../constants";

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
  width: 50%;
`;
const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StoryCard = ({ title, body, renderImage }) => {
  return (
    <CardContainer>
      <CardWrapper>
        <TextWrapper>
          <Title type="primary" center>
            {title}
          </Title>
          <Text type="primary">{body}</Text>
        </TextWrapper>
        <ImageWrapper>{renderImage && renderImage()}</ImageWrapper>
      </CardWrapper>
    </CardContainer>
  );
};

export default StoryCard;
