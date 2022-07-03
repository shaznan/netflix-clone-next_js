import React from "react";
import { SectionContainer, SectionWrapper, Container } from "../style";
import { Title } from "../../common/Title/Title";
import FAQCard from "../../common/FAQCard/index";
import GetStarted from "../GetStarted";

const FAQData = [
  {
    _id: "367e5cb827ab41d59842aab0d81e37e9",
    title: "What is Netflix?",
    body: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    _id: "4240b6c820e74b328d1ef49012a70ff1",
    title: "How much does Netflix cost?",
    body: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.",
  },
  {
    _id: "97e7b4d00c57461393a9850478ad7e65",
    title: "Where can I watch?",
    body: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. ",
  },
  {
    _id: "6def550542f1493da75caff18fd87d8a",
    title: "How do I cancel?",
    body: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    _id: "682efbfb94d04d2db45e1a9141ad78b8",
    title: "How can I watch on Netflix?",
    body: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    _id: "333c9db6631540cb8e79eba474c77c70",
    title: "Is Netflix good for kids?",
    body: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. ",
  },
];

const FAQ = () => {
  return (
    <SectionContainer padding="5">
      <Container>
        <SectionWrapper center flexDirection="column">
          <Title type="primary" mb="4">
            Frequently asked questions
          </Title>
          {FAQData.map((data, key) => (
            <FAQCard key={key} data={data} />
          ))}
          <GetStarted mt="3" />
        </SectionWrapper>
      </Container>
    </SectionContainer>
  );
};

export default FAQ;
