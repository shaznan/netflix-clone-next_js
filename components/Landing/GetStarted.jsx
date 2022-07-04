import React, { useState } from "react";
import {
  GetStartedWrapper,
  EmailBar,
  ButtonWrapper,
  GetStartedContainer,
} from "./style";
import { Button } from "../common/Button/Button";
import { BsChevronRight } from "react-icons/bs";
import useScreenSize from "../../hooks/useScreenSize";
import { breakPoints } from "../../constants";
import { Text } from "../common/Text/Text";

const GetStarted = ({ mt }) => {
  const { width } = useScreenSize();
  const [emailAddress, setEmailAddress] = useState("");

  const onChangeHandler = (e) => {
    setEmailAddress(e.target.value);
  };

  console.log(emailAddress);

  return (
    <GetStartedContainer mt={mt}>
      <Text
        type={
          width < breakPoints.TAB_SCREEN_SMALL ? "secondary-small" : "secondary"
        }
      >
        Ready to watch? Enter your email to create or restart your membership..
      </Text>
      <GetStartedWrapper>
        <EmailBar
          width={width}
          value={emailAddress}
          onChange={onChangeHandler}
        />
        <ButtonWrapper width={width}>
          <Button
            type={width < breakPoints.TAB_SCREEN ? "simplePrimary" : "heroBtn"}
          >
            Get Started
            <BsChevronRight />
          </Button>
        </ButtonWrapper>
      </GetStartedWrapper>
    </GetStartedContainer>
  );
};

export default GetStarted;
