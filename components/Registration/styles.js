import styled from "styled-components";
import { breakPoints_px } from "../../constants";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87.5vh;
`;

export const StepOneWrapper = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeviceImageWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const StepOneTextWrapper = styled.div`
  width: 78%;
  margin: 1rem 0;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const StepTwoWrapper = styled.div`
  max-width: 450px;

  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    max-width: 80vw;
  }
`;

//choose your plan styles

export const ChooseYourPlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckIcon = styled(AiOutlineCheckCircle)`
  color: #e61938;
  font-size: 3em;
  margin-bottom: 1.3rem;
`;

export const TickIcon = styled(BsCheck2)`
  color: #e61938;
  font-size: 2em;
  margin-right: 0.5rem;
`;

export const BenefitsWrapper = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 1rem;
`;
