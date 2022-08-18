import React from "react";
import MovieThumbnailRow from "../components/common/MovieThumbnailRow/index";
import styled from "styled-components";
import { breakPoints_px } from "../constants";
import { movieCatergoryDetails } from "../constants/data";

const Container = styled.div`
  margin-top: -12vw;
  padding-left: 3.5rem;
  @media (max-width: ${breakPoints_px.STANDARD_DESKTOP_SCREEN}) {
    margin-top: -10vw;
  }
  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    padding-left: 1.5rem;
  }
  @media (max-width: ${breakPoints_px.TAB_SCREEN_SMALL}) {
    padding-left: 1rem;
  }
`;

const MovieContainer = () => {
  return (
    <Container>
      {movieCatergoryDetails.map((details, key) => (
        <MovieThumbnailRow key={key} {...details} />
      ))}
    </Container>
  );
};

export default MovieContainer;
