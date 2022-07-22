import styled from "styled-components";
import { breakPoints_px } from "../../../constants";

export const StyledBtn = styled.a`
  background-color: #e50914;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
    padding: 0.1rem 1rem;
    background-color: #e50914;
  }
`;

export const HeroBtn = styled(StyledBtn)`
  padding: 1.1rem 2rem;
  border-radius: 0px;
  font-weight: 400;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

export const StyledBtnWithoutRadius = styled(StyledBtn)`
  border-radius: 0;
  padding: 0.7rem 1rem;
`;

export const SimpleBtn = styled.a`
  color: #333;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
`;

export const WideBtn = styled(HeroBtn)`
  padding: 1.1rem 9rem;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 5px;
  @media (max-width: ${breakPoints_px.MOBILE_SCREEN}) {
    padding: 1.1rem 35%;
  }
`;
