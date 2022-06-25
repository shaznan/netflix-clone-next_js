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
import useScreenSize from "../hooks/useScreenSize";
import { breakPoints } from "../constants";
export default function Landing() {
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
          <Text
            type={
              width < breakPoints.TAB_SCREEN_SMALL
                ? "secondary-small"
                : "secondary"
            }
          >
            Ready to watch? Enter your email to create or restart your
            membership..
          </Text>
          <GetStarted />
        </HeroWrapper>
      </HeroContainer>
    </Main>
  );
}
