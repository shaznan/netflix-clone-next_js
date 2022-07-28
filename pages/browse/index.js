import React, { useEffect } from "react";
import Header from "../../components/Browse/Header";
import { MainWrapper } from "../../components/Browse/styles";
import { Storage, Auth } from "aws-amplify";

Storage.configure({ level: "public" });

const Browse = () => {
  const getURL = async () => {
    const result = await Storage.get(`Brooklyn-Nine-Nine_trailer.mp4`, {
      download: false,
      contentType: "video/mp4",
    });
  };

  useEffect(() => {
    getURL();
  }, []);

  return (
    <MainWrapper>
      <Header />
    </MainWrapper>
  );
};

export default Browse;
