import styled from "styled-components";

export const Wrapper = styled.div`
  -webkit-box-shadow: 0px 1px 5px 1px ${({ theme }) => theme.lightGrey};
  box-shadow: 0px 1px 5px 1px ${({ theme }) => theme.lightGrey};
`;

export const Cart = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.cartBackground};
  min-height: calc(100vh - 180px);
  height: fit-content;
  padding-bottom: 0.5em;
  @media (max-width: 440px) {
    min-height: calc(100vh - 102px);
  }
`;

export const Heading = styled.p`
  color: ${({ theme }) => theme.lightGrey};
  padding: 0.5em 0.7em;
  padding-bottom: 0;
`;

export const BuyBlock = styled.div`
  background-color: ${({ theme }) => theme.white};
  display: flex;
  padding: 2em;
  box-sizing: border-box;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
`;

export const FullPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallHeader = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: smaller;
  margin: 0;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.dark};
  font-weight: 600;
  margin: 0;
`;

export const Span = styled.span`
  cursor: help;
`;
