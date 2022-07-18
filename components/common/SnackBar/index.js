import React from "react";
import styled from "styled-components";
import { GoAlert } from "react-icons/go";
import { Text } from "../Text/Text";

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  background-color: #ffa00a;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 3px;
`;

const IconWrapper = styled.div``;

const TextWrapper = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;

const AlertIcon = styled(GoAlert)`
  font-size: 1.7rem;
`;

const SnackBar = ({ type, message }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <AlertIcon color="white" />
      </IconWrapper>
      <TextWrapper>
        <Text type="secondary-small" left color="white" mb="1" fontSize="1rem">
          <strong>{message}</strong> Please try again later.
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default SnackBar;
