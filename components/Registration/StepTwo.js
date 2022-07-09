import React, { useState } from "react";
import Steps from "../common/Steps";
import { Text } from "../common/Text/Text";
import { Title } from "../common/Title/Title";
import TextInput from "../common/TextInput/index";
import Checkbox from "../common/Checkbox";
import { CheckboxWrapper, StepTwoWrapper } from "./styles";
import { Button } from "../common/Button/Button";

const StepTwo = ({ stepCount, setStepCount }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setIsChecked] = useState(false);

  return (
    <StepTwoWrapper>
      <Steps count={stepCount} total="3" mb="0.5" textAlign="left" />
      <Title type="secondary" color="#333" mb="1">
        Create a password to start your membership
      </Title>
      <Text type="secondary-small" left mb="0.5" color="#333">
        Just a few more steps and you're done!
      </Text>
      <Text type="secondary-small" left color="#333" mb="1">
        We hate paperwork, too.
      </Text>
      <TextInput label="Email" value={email} onChange={setEmail} mb="1" />
      <TextInput
        label="Add a password"
        value={password}
        onChange={setPassword}
        mb="1"
      />
      <CheckboxWrapper>
        <Checkbox checked={checked} setIsChecked={setIsChecked} />
        <Text type="small" color="#333" left>
          Please do not email me Netflix special offers.
        </Text>
      </CheckboxWrapper>
      <Button customType="wide">Next</Button>
    </StepTwoWrapper>
  );
};

export default StepTwo;