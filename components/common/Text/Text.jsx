import React from "react";
import {
  LevelOne,
  LevelTwo,
  LevelTwoSmall,
  LevelThree,
  LevelFour,
  LevelOneSmall,
} from "./style";

export const Text = ({ children, type, ...props }) => {
  switch (type) {
    case "primary":
      return <LevelOne {...props}>{children}</LevelOne>;
    case "primary-small":
      return <LevelOneSmall {...props}>{children}</LevelOneSmall>;
    case "secondary":
      return <LevelTwo {...props}>{children}</LevelTwo>;
    case "secondary-small":
      return <LevelTwoSmall {...props}>{children}</LevelTwoSmall>;
    case "small":
      return <LevelThree {...props}>{children}</LevelThree>;
    case "extra-small":
      return <LevelFour {...props}>{children}</LevelFour>;
    default:
      return <LevelTwo {...props}>{children}</LevelTwo>;
  }
};
