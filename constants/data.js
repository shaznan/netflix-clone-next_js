import { removeUnderScoreFromString as formatTitle } from "../helper";
import { movieSectionTitles } from "./index";

export const menuItems = [
  "Home",
  "Tv Shows",
  "Movies",
  "New & Popular",
  "My List",
  "Browse by Languages",
];

export const movieCatergoryDetails = [
  {
    title: formatTitle(movieSectionTitles.TRENDING_NOW),
    path: `MovieThumbnails/${movieSectionTitles.TRENDING_NOW}/`,
  },
  {
    title: formatTitle(movieSectionTitles.AWARD_WINNING_US_TV_COMEDIES),
    path: `MovieThumbnails/${movieSectionTitles.AWARD_WINNING_US_TV_COMEDIES}/`,
  },
  {
    title: formatTitle(movieSectionTitles.ONLY_ON_NETFLIX),
    path: `MovieThumbnails/${movieSectionTitles.ONLY_ON_NETFLIX}/`,
  },
  {
    title: formatTitle(movieSectionTitles.HOLLYWOOD_MOVIES),
    path: `MovieThumbnails/${movieSectionTitles.HOLLYWOOD_MOVIES}/`,
  },
  {
    title: formatTitle(movieSectionTitles.COMEDIES),
    path: `MovieThumbnails/${movieSectionTitles.COMEDIES}/`,
  },
  {
    title: formatTitle(movieSectionTitles.NEW_RELEASES),
    path: `MovieThumbnails/${movieSectionTitles.NEW_RELEASES}/`,
  },
  {
    title: formatTitle(movieSectionTitles.WATCH_TOGETHER_FOR_OLDER_KIDS),
    path: `MovieThumbnails/${movieSectionTitles.WATCH_TOGETHER_FOR_OLDER_KIDS}/`,
  },
  {
    title: formatTitle(movieSectionTitles.EXCITING_MOVIES),
    path: `MovieThumbnails/${movieSectionTitles.EXCITING_MOVIES}/`,
  },
  {
    title: formatTitle(movieSectionTitles.MOVIES_FROM_1990),
    path: `MovieThumbnails/${movieSectionTitles.MOVIES_FROM_1990}/`,
  },
  {
    title: formatTitle(movieSectionTitles.AWARD_WINNING_FILMS),
    path: `MovieThumbnails/${movieSectionTitles.AWARD_WINNING_FILMS}/`,
  },
  {
    title: formatTitle(movieSectionTitles.CRIME_COMEDIES),
    path: `MovieThumbnails/${movieSectionTitles.CRIME_COMEDIES}/`,
  },
  {
    title: formatTitle(movieSectionTitles.HOLLYWOOD_DRAMA_MOVIES),
    path: `MovieThumbnails/${movieSectionTitles.HOLLYWOOD_DRAMA_MOVIES}/`,
  },
];
