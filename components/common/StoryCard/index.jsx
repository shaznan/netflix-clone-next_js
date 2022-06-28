import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";

const CardContainer = styled.div`
  padding: 4rem 4rem;
  border-bottom: 8px solid #222222;
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
const ImageWrapper = styled.div`
  // max-width: 80vw;
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
        {renderImage && <ImageWrapper>{renderImage()}</ImageWrapper>}
      </CardWrapper>
    </CardContainer>
  );
};

export default StoryCard;
