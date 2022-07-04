import React from "react";
import { SectionContainer, SectionWrapper, Container } from "../style";
import { Title } from "../../common/Title/Title";
import FAQCard from "../../common/FAQCard/index";
import GetStarted from "../GetStarted";

const FAQ = ({ data }) => {
  return (
    <SectionContainer padding="5">
      <Container>
        <SectionWrapper center flexDirection="column">
          <Title type="primary" mb="4">
            Frequently asked questions
          </Title>
          {data?.map((item, key) => (
            <FAQCard key={item?._id} data={item} />
          ))}
          <GetStarted mt="3" />
        </SectionWrapper>
      </Container>
    </SectionContainer>
  );
};

export default FAQ;
