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
