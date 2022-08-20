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
import { useRouter } from "next/router";

const ChooseYourPlan = ({ stepCount, setStepCount }) => {
  const router = useRouter();
  const benefits = [
    "No commitments, cancel anytime.",
    "Everything on Netflix for one low price.",
    "No ads and no extra fees. Ever.",
  ];

  const renderBenefits = (text, i) => (
    <BenefitsWrapper key={i}>
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
        Enjoy your free plan.
      </Title>
      {benefits.map((item, key) => renderBenefits(item, key))}
      {/* TODO: Find out a way to signin user to aws when signup process is completed and redirect to browse page */}
      <Button customType="wide" onClick={() => router.push("/signin")}>
        Sign In to continue
      </Button>
    </ChooseYourPlanWrapper>
  );
};

export default ChooseYourPlan;
