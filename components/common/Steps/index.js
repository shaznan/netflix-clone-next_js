import React from "react";
import { Text } from "../Text/Text";

const Steps = ({ count = 1, total = 1 }) => {
  return (
    <div>
      <Text type="extra-small" color="black">
        STEP <strong>{count}</strong> OF <strong>{total}</strong>
      </Text>
    </div>
  );
};

export default Steps;
