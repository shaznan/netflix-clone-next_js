import React, { useEffect } from "react";
import Header from "../../components/Browse/Header";
import { MainWrapper } from "../../components/Browse/styles";
import { Storage, Auth } from "aws-amplify";
import Hero from "../../components/Browse/Hero/index";

Storage.configure({ level: "public" });

//TODO: Derive a hook for get bucket url

const Browse = () => {
  return (
    <MainWrapper>
      <Header />
      <Hero />
    </MainWrapper>
  );
};

export default Browse;
