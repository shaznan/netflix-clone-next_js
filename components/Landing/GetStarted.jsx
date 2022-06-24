import React from "react";
import { GetStartedWrapper, EmailBar } from "./style";
import { Button } from "../common/Button/Button";
import { BsChevronRight } from "react-icons/bs";
import useScreenSize from "../../hooks/useScreenSize";
import { breakPoints } from "../../constants";

const GetStarted = () => {
  const { width } = useScreenSize();
  return (
    <GetStartedWrapper>
      <EmailBar />
      <Button type={width < breakPoints.TAB_SCREEN ? "primary" : "heroBtn"}>
        Get Started
        <BsChevronRight />
      </Button>
    </GetStartedWrapper>
  );
};

export default GetStarted;
