import styled from "styled-components";

export const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 25px;
  height: 2.6em;
  width: 6em;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  position: relative;
  @media (max-width: 1060px) {
    border: none;
    justify-content: center;
  }
`;

export const Cart = styled.img`
  color: grey;
  max-height: 1.3em;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.dark};
  font-weight: 600;
  @media (max-width: 1060px) {
    padding-left: 0.5em;
  }
`;

export const Counter = styled.div`
  background-color: ${({ theme }) => theme.counter};
  color: ${({ theme }) => theme.white};
  width: 20px;
  height: 19px;
  text-align: center;
  padding-top: 1px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.white};
  position: absolute;
  top: 2px;
  left: 1.8em;
  z-index: 1;
`;
