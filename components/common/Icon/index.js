import React from "react";
import { Play, Plus, ThumbsUp, ThumbsDown, ArrowDown } from "./styles";

const Icon = ({ type, ...props }) => {
  switch (type) {
    case "play":
      return <Play {...props} />;
    case "plus":
      return <Plus {...props} />;
    case "thumbsUp":
      return <ThumbsUp {...props} />;
    case "thumbsDown":
      return <ThumbsDown {...props} />;
    case "arrowDown":
      return <ArrowDown {...props} />;
  }
};

export default Icon;
