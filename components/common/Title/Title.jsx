import React from "react";
import { HeadingOne, HeadingTwo, HeadingThree } from "./style";

export const Title = ({ children, type, ...props }) => {
  switch (type) {
    case "main":
      return <HeadingOne {...props}>{children}</HeadingOne>;
    case "primary":
      return <HeadingTwo {...props}>{children}</HeadingTwo>;
    case "secondary":
      return <HeadingThree {...props}>{children}</HeadingThree>;
    default:
      return <HeadingTwo {...props}>{children}</HeadingTwo>;
  }
};
