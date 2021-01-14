import styled from "styled-components";

export const Main = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1340px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
`;

export const LeftBlock = styled.div`
  max-width: 1000px;
  padding-right: 350px;
  padding-bottom: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 1060px) {
    padding-right: 0;
  }
`;

export const RightBlock = styled.div`
  width: 340px;
  padding-right: 1em;
  height: 100%;
  position: absolute;
  display: block;
  right: 0;
  top: 0;
  @media (max-width: 1060px) {
    display: none;
  }
`;
