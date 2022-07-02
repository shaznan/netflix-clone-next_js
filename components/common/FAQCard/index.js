import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../Text/Text";
import { AiOutlinePlus } from "react-icons/Ai";
import { breakPoints_px } from "../../../constants";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #303030;
  padding: 1.5rem 2rem;
  width: 70%;
  margin-bottom: 0.6rem;
`;

const StyledPlusIcon = styled(AiOutlinePlus)`
  font-size: 2em;
  color: white;
  transform: ${({ isCardOpen }) =>
    isCardOpen ? "rotate(45deg)" : "rotate(0deg)"};

  //   @media (min-width: ${breakPoints_px.MOBILE_SCREEN}) {
  //     font-size: 2em;
  //   }
`;

const FAQCard = ({ data }) => {
  const { title, body } = data || {};
  const [isCardOpen, setIsCardOpen] = useState(false);
  return (
    <CardContainer>
      <Text type="primary">{title}</Text>
      <StyledPlusIcon
        onClick={() => {
          setIsCardOpen(!isCardOpen);
        }}
        isCardOpen={isCardOpen}
      />
    </CardContainer>
  );
};

export default FAQCard;
