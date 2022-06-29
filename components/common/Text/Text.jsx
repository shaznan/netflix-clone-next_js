import React from "react";
import { LevelOne, LevelTwo, LevelTwoSmall } from "./style";

export const Text = ({ children, type, ...props }) => {
  switch (type) {
    case "primary":
      return <LevelOne {...props}>{children}</LevelOne>;
    case "secondary":
      return <LevelTwo {...props}>{children}</LevelTwo>;
    case "secondary-small":
      return <LevelTwoSmall {...props}>{children}</LevelTwoSmall>;
    default:
      return <LevelTwo {...props}>{children}</LevelTwo>;
  }
};
