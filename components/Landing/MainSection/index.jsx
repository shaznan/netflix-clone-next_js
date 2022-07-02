import React from "react";
import Header from "../Header";
import { Main, HeroWrapper, HeroContainer, HeroSlogan } from "../style";
import { Title } from "../../common/Title/Title";
import { Text } from "../../common/Text/Text";
import GetStarted from "../GetStarted";
import useScreenSize from "../../../hooks/useScreenSize";
import { breakPoints } from "../../../constants/index";

const MainSection = () => {
  const { width } = useScreenSize();

  return (
    <Main>
      <Header />
      <HeroContainer>
        <HeroWrapper>
          <Title type="main">Unlimited movies, TV</Title>
          <Title type="main">shows, and more. </Title>
          <HeroSlogan>
            <Text type="primary">Watch anywhere. Cancel anytime.</Text>
          </HeroSlogan>
          <GetStarted />
        </HeroWrapper>
      </HeroContainer>
    </Main>
  );
};

export default MainSection;
