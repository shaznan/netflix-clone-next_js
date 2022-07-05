import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../../../components/common/Header/Header";
import { MainWrapper } from "../../../components/Registration/styles";
import StepOne from "../../../components/Registration/StepOne";
import wrapper from "../../../components/Registration/wrapper";

const Registration = () => {
  const router = useRouter();
  const [stepCount, setStepCount] = useState(1);
  console.log(router.query, "HOHO");

  const props = {
    stepCount,
    setStepCount,
  };

  const WrappedComponent = wrapper(StepOne);

  return <>{stepCount === 1 && <WrappedComponent {...props} />}</>;
};

export default Registration;
