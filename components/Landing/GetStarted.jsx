import React from "react";
import { GetStartedWrapper, EmailBar, ButtonWrapper } from "./style";
import { Button } from "../common/Button/Button";
import { BsChevronRight } from "react-icons/bs";
import useScreenSize from "../../hooks/useScreenSize";
import { breakPoints } from "../../constants";

const GetStarted = () => {
  const { width } = useScreenSize();
  return (
    <GetStartedWrapper>
      <EmailBar />
      <ButtonWrapper width={width}>
        <Button
          type={width < breakPoints.TAB_SCREEN ? "simplePrimary" : "heroBtn"}
        >
          Get Started
          <BsChevronRight />
        </Button>
      </ButtonWrapper>
    </GetStartedWrapper>
  );
};

export default GetStarted;

// { display: "flex", justifyContent: "center", marginTop: "1rem" }
