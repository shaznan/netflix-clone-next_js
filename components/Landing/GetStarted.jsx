import React from "react";
import { GetStartedWrapper, EmailBar } from "./style";
import { Button } from "../common/Button/Button";
import { BsChevronRight } from "react-icons/bs";

const GetStarted = () => {
  return (
    <GetStartedWrapper>
      <EmailBar />
      <Button type="heroBtn">
        Get Started
        <BsChevronRight />
      </Button>
    </GetStartedWrapper>
  );
};

export default GetStarted;
