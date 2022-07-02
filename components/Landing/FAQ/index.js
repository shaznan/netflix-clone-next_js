import React from "react";
import {
  HeroContainer,
  HeroWrapper,
  SectionContainer,
  SectionWrapper,
  Container,
} from "../style";
import { Title } from "../../common/Title/Title";
import FAQCard from "../../common/FAQCard/index";

const FAQ = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionWrapper center flexDirection="column">
          <Title type="primary" mb="2">
            Frequently asked questions
          </Title>
          <FAQCard />
        </SectionWrapper>
      </Container>
    </SectionContainer>
  );
};

export default FAQ;
