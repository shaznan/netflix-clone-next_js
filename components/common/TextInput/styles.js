import styled from "styled-components";
import { breakPoints_px } from "../../../constants";

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: ${({ mb }) => `${mb}rem`};
  margin-top: ${({ mt }) => `${mt}rem`};
`;

export const InputLabel = styled.label`
  color: grey;
  position: absolute;
  left: 30px;
  background: #ffffff;
  transition: 300ms;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const InputField = styled.input`
  outline: none;
  padding: 25px 12px 16px 12px;
  border: 1px solid
    ${({ borderColor }) => (borderColor ? borderColor : "#dadce0")};
  font-size: 16px;
  width: 100%;
  & + ${InputLabel} {
    top: ${({ value }) => (value?.length ? "14px" : "30px")};

    left: 18%;
    right: 50%;

    font-size: ${({ value }) => (value?.length ? "12px" : "16px")};

    font-weight: ${({ value }) => (value?.length ? "bold" : "normal")};

    @media (max-width: ${breakPoints_px.TAB_SCREEN}) {
      left: 28%;
      right: 25%;
    }
  }

  &:focus {
    border: 1px solid
      ${({ borderColor }) => (borderColor ? borderColor : "royalblue")};
  }

  &:focus + ${InputLabel} {
    top: +14px;
    left: 17.73%;
    right: 50%;
    padding: 0 3px;
    color: grey;
    font-size: 12px;
    font-weight: bold;
    transition: 100ms;
  }
`;
