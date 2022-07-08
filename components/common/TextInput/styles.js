import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;
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
  border: 1px solid #dadce0;
  font-size: 16px;

  & + ${InputLabel} {
    top: ${({ value }) => (value?.length ? "14px" : "30px")};

    left: ${({ value }) => (value?.length ? "25px" : "30px")};

    font-size: ${({ value }) => (value?.length ? "12px" : "16px")};

    font-weight: ${({ value }) => (value?.length ? "bold" : "normal")};
  }

  &:focus {
    border: 1px solid royalblue;
  }

  &:focus + ${InputLabel} {
    top: +14px;
    padding: 0 3px;
    color: grey;
    font-size: 12px;
    font-weight: bold;
    transition: 100ms;
    left: 25px;
  }
`;
