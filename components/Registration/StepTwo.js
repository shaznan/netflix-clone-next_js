import React from "react";
import Steps from "../common/Steps";
import { Text } from "../common/Text/Text";
import { Title } from "../common/Title/Title";
import TextInput from "../common/TextInput/index";

const StepTwo = ({ stepCount, setStepCount }) => {
  return (
    <div>
      <Steps count={stepCount} total="3" />
      <Title type="secondary" center color="#333">
        Create a password to start your membership
      </Title>
      <Text type="secondary-small" color="#333">
        Netflix is personalized for you. Create a password to watch on any
        device at any time.
      </Text>
      <TextInput />
    </div>
  );
};

export default StepTwo;
