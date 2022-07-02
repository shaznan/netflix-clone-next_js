import React from "react";
import {
  HeroContainer,
  HeroWrapper,
  SectionContainer,
  SectionWrapper,
  Container,
  FAQCardWrapper,
} from "../style";
import { Title } from "../../common/Title/Title";
import FAQCard from "../../common/FAQCard/index";
import GetStarted from "../GetStarted";

const FAQData = [
  {
    title: "What is Netflix?",
    body: [
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. ",
      <br />,
      <br />,
      " You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    ],
  },
  {
    title: "How much does Netflix cost?",
    body: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.",
  },
  {
    title: "Where can I watch?",
    body: [
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      <br />,
      <br />,
      "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    ],
  },
  {
    title: "How do I cancel?",
    body: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    title: "How can I watch on Netflix?",
    body: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    title: "Is Netflix good for kids?",
    body: [
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
      <br />,
      <br />,
      " Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    ],
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
