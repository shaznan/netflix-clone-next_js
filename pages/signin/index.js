import React from "react";
import Header from "../../components/common/Header/Header";
import {
  MainWrapper,
  BodyWrapper,
  SignInWrapper,
} from "../../components/SignIn/styles";
import { Title } from "../../components/common/Title/Title";

const signin = () => {
  return (
    <MainWrapper>
      <Header type="signin" />
      <BodyWrapper>
        <SignInWrapper>
          <Title type="secondary" color="white" mb="1">
            Sign In
          </Title>
        </SignInWrapper>
      </BodyWrapper>
    </MainWrapper>
  );
};

export default signin;
