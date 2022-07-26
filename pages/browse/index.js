import React, { useEffect } from "react";
import Header from "../../components/Browse/Header";
import { MainWrapper } from "../../components/Browse/styles";
import { Storage, Auth } from "aws-amplify";

const Browse = () => {
  const getURL = async () => {
    const result = await Storage.get(`Brooklyn-Nine-Nine_trailer.mp4`, {
      download: false,
      contentType: "video/mp4",
    });

    const requestConfig = {
      customPrefix: {
        public: "",
        protected: "",
        private: "",
      },
      level: "public",
      cacheControl: "no-cache",
    };

    await Storage.list("", requestConfig)
      .then((result) => console.log("Result:", result)) // {key: "test.txt"}
      .catch((err) => console.log(err));
    // console.log(await Storage.list(), "LIST");
    // console.log(result, "RESULT");
    // console.log(
    //   "https://netflixclone9a89a58844304fa6925e71ef49ab0718133042-dev.s3.amazonaws.com/Brooklyn-Nine-Nine_trailer.mp4",
    //   "TRY"
    // );
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
