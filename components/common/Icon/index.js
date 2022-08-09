import React from "react";
import { Play, Plus, ThumbsUp, ThumbsDown, ArrowDown } from "./styles";

const Icon = ({ type }) => {
  switch (type) {
    case "play":
      return <Play />;
    case "plus":
      return <Plus />;
    case "thumbsUp":
      return <ThumbsUp />;
    case "thumbsDown":
      return <ThumbsDown />;
    case "arrowDown":
      return <ArrowDown />;
  }
};

export default Icon;
