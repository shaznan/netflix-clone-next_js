import React from "react";
import MovieThumbnailRow from "../components/common/MovieThumbnailRow/index";
import styled from "styled-components";
import { breakPoints_px } from "../constants";

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
  const movies = [
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__+deadToMe.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__bigMouth.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__bigMouth.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__bigMouth.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__bigMouth.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
    "https://netflix-clone-project.s3.amazonaws.com/public-directory/test/Project+Pictures/thumbnail__boJack_horseman.jpg",
  ];

  //TODO:
  /**
   * show navigation arrow only when row is hovered, make it small, and scale it on hover
   * bring the thumbnails to the left on initial render feels a bit off aligned
   * add a seperate container or component for the hero section and make that height 100%
   * scroll issue
   */
  return (
    <Container>
      <MovieThumbnailRow movies={movies} title="Trending Now" />
      <MovieThumbnailRow movies={movies} title="Award-Winning US TV Comedies" />
      <MovieThumbnailRow movies={movies} title="Award-Winning US TV Comedies" />
      <MovieThumbnailRow movies={movies} title="Award-Winning US TV Comedies" />
      <MovieThumbnailRow movies={movies} title="Award-Winning US TV Comedies" />
    </Container>
  );
};

export default MovieContainer;
