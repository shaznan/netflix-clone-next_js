import React from "react";
import { HeadingOne, HeadingTwo } from "./style";

export const TitleOne = ({ Text }) => {
  return <HeadingOne>{Text}</HeadingOne>;
};

export const TitleTwo = ({ Text }) => {
  return <HeadingTwo>{Text}</HeadingTwo>;
};
