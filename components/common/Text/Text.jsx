import React from "react";
import { LevelOne, LevelTwo, LevelTwoSmall } from "./style";

export const Text = ({ children, type }) => {
  switch (type) {
    case "primary":
      return <LevelOne>{children}</LevelOne>;
    case "secondary":
      return <LevelTwo>{children}</LevelTwo>;
    case "secondary-small":
      return <LevelTwoSmall>{children}</LevelTwoSmall>;
    default:
      return <LevelTwo>{children}</LevelTwo>;
  }
};
