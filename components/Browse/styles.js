import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: black;
  height: 100vh;
`;

//Header styles
export const HeaderWrapper = styled.div`
  display: flex;
  padding: 1.2rem 3.5rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.4rem;
  margin-left: 1.8rem;
  min-width: 550px;
`;

export const MenuItemWrapper = styled.div`
  color: #e5e5e5;
  font-size: 15px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "none")};
  transition: 0.7s;
`;
