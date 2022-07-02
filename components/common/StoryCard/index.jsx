import React from "react";
import styled from "styled-components";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { breakPoints_px, breakPoints } from "../../../constants";
import useScreenSize from "../../../hooks/useScreenSize";
import {
  Container,
  SectionContainer,
  SectionWrapper,
  TextWrapper,
} from "../../Landing/style";

const StoryCard = ({ title, body, renderImage, invert }) => {
  const { width } = useScreenSize();
  return (
    <SectionContainer>
      <Container>
        <SectionWrapper>
          <TextWrapper invert={invert}>
            <Title type="primary" center={width < breakPoints.TAB_SCREEN}>
              {title}
            </Title>
            <br />
            <Text type="primary" center={width < breakPoints.TAB_SCREEN}>
              {body}
            </Text>
          </TextWrapper>
          {renderImage && renderImage()}
        </SectionWrapper>
      </Container>
    </SectionContainer>
  );
};

export default StoryCard;
