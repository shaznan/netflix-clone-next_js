import React from "react";
import { HeadingOne, HeadingTwo } from "./style";

export const Title = ({ children, type, ...props }) => {
  switch (type) {
    case "main":
      return <HeadingOne {...props}>{children}</HeadingOne>;
    case "primary":
      return <HeadingTwo {...props}>{children}</HeadingTwo>;
    default:
      return <HeadingTwo {...props}>{children}</HeadingTwo>;
  }
};
