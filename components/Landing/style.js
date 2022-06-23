import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  margin-top: 1.5rem;
  width: 95vw;
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.section`
  height: 76vh;
  background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/34898001-4eca-456d-b768-b579b8eca1bd/LK-en-20220620-popsignuptwoweeks-perspective_alpha_website_large.jpg);
  position: relative;
  z-index: 0;
  &:before {
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 53%,
      rgba(0, 0, 0, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 53%,
      rgba(0, 0, 0, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 53%,
      rgba(0, 0, 0, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */

    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;
