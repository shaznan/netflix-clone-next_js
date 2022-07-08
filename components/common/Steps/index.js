import React from "react";
import { Text } from "../Text/Text";

const Steps = ({ count = 1, total = 1, mb, textAlign }) => {
  return (
    <div>
      <Text
        type="extra-small"
        color="black"
        style={{
          marginBottom: mb ? `${mb}rem` : 0,
          textAlign: textAlign ? textAlign : "center",
        }}
      >
        STEP <strong>{count}</strong> OF <strong>{total}</strong>
      </Text>
    </div>
  );
};

export default Steps;
