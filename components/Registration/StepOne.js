import React from "react";
import {
  StepOneWrapper,
  DeviceImageWrapper,
  StepOneTextWrapper,
} from "./styles";
import Image from "next/image";
import Steps from "../common/Steps";
import { Title } from "../common/Title/Title";
import { Text } from "../common/Text/Text";
import { Button } from "../common/Button/Button";

const StepOne = ({ stepCount, setStepCount }) => {
  return (
    <>
      <StepOneWrapper>
        <DeviceImageWrapper>
          <Image
            src="https://netflix-clone-project.s3.amazonaws.com/public-directory/Devices.png"
            width="250"
            height="70"
          />
        </DeviceImageWrapper>
        <Steps count={stepCount} total="3" />

        <Title type="secondary" center color="#333">
          Finish setting up your account
        </Title>
        <StepOneTextWrapper>
          <Text type="secondary-small" color="#333">
            Netflix is personalized for you. Create a password to watch on any
            device at any time.
          </Text>
        </StepOneTextWrapper>
        <Button customType="wide" onClick={() => setStepCount(stepCount + 1)}>
          Next
        </Button>
      </StepOneWrapper>
    </>
  );
};

export default StepOne;
