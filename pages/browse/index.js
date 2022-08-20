import React, { useEffect, useMemo } from "react";
import Header from "../../components/Browse/Header";
import { MainWrapper } from "../../components/Browse/styles";
import { Storage, Auth } from "aws-amplify";
import Hero from "../../components/Browse/Hero/index";
import MovieThumbnailRow from "../../components/common/MovieThumbnailRow";
import MovieContainer from "../../containers/MovieContainer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

Storage.configure({ level: "public" });

//TODO: Derive a hook for get bucket url
/**
 * Add fade gradient below picture and video
 * create re-usable thumbnail row with title
 * create tiny pagination bar
 *  Add a row for top 10 shows in sri lanka with big numbers
 */

const Browse = () => {
  const router = useRouter();
  const { userData } = useSelector((state) => state.Auth);
  const isUserAuthenticated = useMemo(
    () => userData?.signInUserSession?.idToken?.jwtToken?.length,
    [JSON.stringify(userData)]
  );

  if (!isUserAuthenticated) {
    router.push("/");
    return;
  }

  return (
    <MainWrapper>
      <Header />
      <Hero />
      <MovieContainer />
    </MainWrapper>
  );
};

export default Browse;
