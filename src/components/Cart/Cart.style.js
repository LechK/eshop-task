import styled from "styled-components";

export const Cart = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.cartBackground};
  min-height: 100vh;
  -webkit-box-shadow: 0px 1px 5px 1px ${({ theme }) => theme.lightGrey};
  box-shadow: 0px 1px 5px 1px ${({ theme }) => theme.lightGrey};
`;

export const Heading = styled.p`
  color: ${({ theme }) => theme.lightGrey};
  padding: 0.5em;
`;
