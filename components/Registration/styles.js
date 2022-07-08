import styled from "styled-components";
import { breakPoints_px } from "../../constants";

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
