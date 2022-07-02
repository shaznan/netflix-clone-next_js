import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../Text/Text";
import { AiOutlinePlus } from "react-icons/ai";
import { breakPoints_px } from "../../../constants";
import AnimateHeight from "react-animate-height";
import GetStarted from "../../Landing/GetStarted";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #303030;
  padding: 1.5rem 2rem;
  width: 70%;
  margin-bottom: 0.6rem;

  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    padding: 1rem 2rem;
    width: 90%;
  }
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    padding: 1rem 2rem;
    width: 100vw;
  }
`;

const StyledPlusIcon = styled(AiOutlinePlus)`
  font-size: 2em;
  color: white;
  transform: ${({ isCardOpen }) =>
    isCardOpen ? "rotate(45deg)" : "rotate(0deg)"};
`;

const ExpandCardWrapper = styled(CardContainer)`
  display: ${({ open }) => (open ? "block" : "none")};
`;

const FAQCard = ({ data }) => {
  const { title, body } = data || {};
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [height, setHeight] = useState(0);
  return (
    <>
      <CardContainer>
        <Text type="primary">{title}</Text>
        <StyledPlusIcon
          onClick={() => {
            setIsCardOpen(!isCardOpen);
            setHeight(height === 0 ? "auto" : 0);
          }}
          isCardOpen={isCardOpen}
        />
      </CardContainer>
      <ExpandCardWrapper open={isCardOpen}>
        <AnimateHeight id="example-panel" duration={500} height={height}>
          <Text type="primary">{body}</Text>
        </AnimateHeight>
      </ExpandCardWrapper>
    </>
  );
};

export default FAQCard;
