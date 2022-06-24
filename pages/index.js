import Header from "../components/Landing/Header";
import {
  Main,
  HeroWrapper,
  HeroContainer,
  HeroSlogan,
} from "../components/Landing/style";
import { Title } from "../components/common/Title/Title";
import { Text } from "../components/common/Text/Text";
import GetStarted from "../components/Landing/GetStarted";
export default function Landing() {
  return (
    <Main>
      <Header />
      <HeroContainer>
        <HeroWrapper>
          <Title type="main">Unlimited movies, TV</Title>
          <Title type="main">shows, and more. </Title>s
          <HeroSlogan>
            <Text type="primary">Watch anywhere. Cancel anytime.</Text>
          </HeroSlogan>
          <Text type="secondary">
            Ready to watch? Enter your email to create or restart your
            membership..
          </Text>
          <GetStarted />
        </HeroWrapper>
      </HeroContainer>
    </Main>
  );
}
