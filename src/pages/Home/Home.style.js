import styled from "styled-components";

export const Main = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1340px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const LeftBlock = styled.div`
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const RightBlock = styled.div`
  width: 340px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.cartBackground};
  min-height: 100vh;
  -webkit-box-shadow: 0px 1px 5px 1px ${({ theme }) => theme.lightGrey};
  box-shadow: 0px 1px 5px 1px ${({ theme }) => theme.lightGrey};
`;
