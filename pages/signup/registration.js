import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/common/Header/Header";
import { MainWrapper } from "../../components/Registration/styles";
import StepOne from "../../components/Registration/StepOne";

const Registration = () => {
  const router = useRouter();

  console.log(router.query, "HOHO");
  return (
    <div>
      <Header theme="light" />
      <MainWrapper>
        <StepOne />
      </MainWrapper>
    </div>
  );
};

export default Registration;
