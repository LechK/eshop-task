import styled from "styled-components";

export const ProductBox = styled.div`
  width: calc(25% - 1.5em);
  max-height: 400px;
  margin-top: 1em;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  text-align: center;
  background-color: ${({ theme }) => theme.white};
`;

export const Favorite = styled.img`
  max-height: 25px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const Product = styled.div`
  padding-top: 2em;
  position: relative;
`;

export const Title = styled.h4`
  cursor: pointer;
  color: ${({ theme }) => theme.grey};
  font-weight: lighter;
  &:hover {
    color: ${({ theme }) => theme.red};
  }
`;

export const Price = styled.h2`
  color: ${({ theme }) => theme.red};
  font-weight: lighter;
`;
