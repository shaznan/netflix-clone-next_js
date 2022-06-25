import React from "react";
import { HeadingOne, HeadingTwo } from "./style";

export const Title = ({ children, type }) => {
  switch (type) {
    case "main":
      return <HeadingOne>{children}</HeadingOne>;
    case "primary":
      return <HeadingTwo>{children}</HeadingTwo>;
    default:
      return <HeadingTwo>{children}</HeadingTwo>;
  }
};
