import Header from "../components/Landing/Header";
import { Main, HeroWrapper, HeroContainer } from "../components/Landing/style";
import { TitleOne } from "../components/common/Title/Title";
import { Text } from "../components/common/Text/Text";

export default function Landing() {
  return (
    <Main>
      <Header />
      <HeroContainer>
        <HeroWrapper>
          <TitleOne Text="Unlimited movies, TV" />
          <TitleOne Text="shows, and more. " />
          <Text type="primary">Watch anywhere. Cancel anytime.</Text>
          <Text type="secondary">
            Ready to watch? Enter your email to create or restart your
            membership..
          </Text>
        </HeroWrapper>
      </HeroContainer>
    </Main>
  );
}
