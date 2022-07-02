import React from "react";
import { GetStartedWrapper, EmailBar, ButtonWrapper } from "./style";
import { Button } from "../common/Button/Button";
import { BsChevronRight } from "react-icons/bs";
import useScreenSize from "../../hooks/useScreenSize";
import { breakPoints } from "../../constants";
import { Text } from "../common/Text/Text";

const GetStarted = () => {
  const { width } = useScreenSize();
  return (
    <>
      <Text
        type={
          width < breakPoints.TAB_SCREEN_SMALL ? "secondary-small" : "secondary"
        }
      >
        Ready to watch? Enter your email to create or restart your membership..
      </Text>
      <GetStartedWrapper>
        <EmailBar width={width} />
        <ButtonWrapper width={width}>
          <Button
            type={width < breakPoints.TAB_SCREEN ? "simplePrimary" : "heroBtn"}
          >
            Get Started
            <BsChevronRight />
          </Button>
        </ButtonWrapper>
      </GetStartedWrapper>
    </>
  );
};

export default GetStarted;
