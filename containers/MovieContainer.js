import React, { useEffect } from "react";
import MovieThumbnailRow from "../components/common/MovieThumbnailRow/index";
import styled from "styled-components";
import { breakPoints_px, movieSectionTitles } from "../constants";
import { Storage } from "aws-amplify";

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

  const formatTitle = (title) => {
    return title.replace(/_/g, " ");
  };

  //   useEffect(() => {
  //     first;

  //     return () => {
  //       second;
  //     };
  //   }, [third]);
  const getBucketList = async (path) => {
    Storage.configure({ level: "public" });

    await Storage.list(path)
      .then((result) => console.log("Result", result)) // {key: "test.txt"}
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBucketList();
  }, []);

  const movieCatergoryDetails = [
    {
      title: formatTitle(movieSectionTitles.TRENDING_NOW),
      path: "MovieThumbnails/Trending_Now/",
    },
  ];

  return (
    <Container>
      {movieCatergoryDetails.map((details, key) => (
        <MovieThumbnailRow key={key} {...details} />
      ))}
    </Container>
  );
};

export default MovieContainer;

{
  /* <MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.AWARD_WINNING_US_TV_COMEDIES)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.ONLY_ON_NETFLIX)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.HOLLYWOOD_MOVIES)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.COMEDIES)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.NEW_RELEASES)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.WATCH_TOGETHER_FOR_OLDER_KIDS)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.WATCH_IT_AGAIN)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.EXCITING_MOVIES)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.MOVIES_FROM_1990)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.AWARD_WINNING_FILMS)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.CRIME_COMEDIES)}
/>
<MovieThumbnailRow
  movies={movies}
  title={formatTitle(movieSectionTitles.HOLLYWOOD_DRAMA_MOVIES)}
/> */
}
