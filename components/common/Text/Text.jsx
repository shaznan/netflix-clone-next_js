import React from "react";
import { LevelOne, LevelTwo } from "./style";

export const Text = ({ children, type }) => {
  switch (type) {
    case "primary":
      return <LevelOne>{children}</LevelOne>;
    case "secondary":
      return <LevelTwo>{children}</LevelTwo>;
    default:
      return <LevelTwo>{children}</LevelTwo>;
  }
};
