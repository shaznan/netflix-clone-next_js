import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { breakPoints_px } from "../../../constants";

const CardContainer = styled.div`
  padding: 4rem 4rem;
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
            {title}
          </Title>
          <Text type="primary">{body}</Text>
        </TextWrapper>
        {renderImage && renderImage()}
      </CardWrapper>
    </CardContainer>
  );
};

export default StoryCard;
