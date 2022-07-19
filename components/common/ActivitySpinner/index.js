import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #fb5b53;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 0.5s linear 0s infinite;
`;

const ActivitySpinner = () => {
  return (
    <Wrapper>
      <Spinner></Spinner>
    </Wrapper>
  );
};

export default ActivitySpinner;
