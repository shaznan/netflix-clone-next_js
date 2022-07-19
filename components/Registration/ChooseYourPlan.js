import React from "react";
import Steps from "../common/Steps/index";
import { Title } from "../common/Title/Title";
import { Text } from "../common/Text/Text";
import { Button } from "../common/Button/Button";
import {
  ChooseYourPlanWrapper,
  CheckIcon,
  TickIcon,
  BenefitsWrapper,
} from "./styles";

const ChooseYourPlan = ({ stepCount, setStepCount }) => {
  const benefits = [
    "No commitments, cancel anytime.",
    "Everything on Netflix for one low price.",
    "No ads and no extra fees. Ever.",
  ];

  const renderBenefits = (text) => (
    <BenefitsWrapper>
      <TickIcon />
      <Text type="secondary-small" left mb="0.5" color="#333">
        {text}
      </Text>
    </BenefitsWrapper>
  );

  return (
    <ChooseYourPlanWrapper>
      <CheckIcon />
      <Steps count={stepCount} total="3" mb="0.5" textAlign="left" />
      <Title type="secondary" color="#333" mb="2">
        Choose your plan.
      </Title>
      {benefits.map((item) => renderBenefits(item))}
      <Button customType="wide" onClick={() => setStepCount(4)}>
        Next
      </Button>
    </ChooseYourPlanWrapper>
  );
};

export default ChooseYourPlan;
