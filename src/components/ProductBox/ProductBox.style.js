import styled from "styled-components";

export const ProductBox = styled.div`
  width: calc(25% - 1.5em);
  height: 380px;
  margin-top: 1em;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  text-align: center;
  background-color: ${({ theme }) => theme.white};
  padding: 0.5em;
  @media (max-width: 770px) {
    height: 170px;
    width: 100%;
    margin-top: 0;
  }
`;

export const Product = styled.div`
  padding-top: 2em;
  position: relative;
  @media (max-width: 770px) {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0;
    padding-right: 20px;
  }
  @media (min-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonBlock = styled.div`
  @media (max-width: 770px) {
    width: calc(100% - 100px);
    text-align: right;
    align-self: center;
  }
`;

export const Favorite = styled.img`
  max-height: 25px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 110px;
  object-fit: contain;
  @media (max-width: 770px) {
    width: 100px;
    height: 100px;
  }
`;

export const Title = styled.p`
  cursor: pointer;
  color: ${({ theme }) => theme.grey};
  font-weight: lighter;
  &:hover {
    color: ${({ theme }) => theme.red};
  }
  @media (max-width: 770px) {
    width: calc(100% - 130px);
    text-align: left;
    font-size: 0.9em;
  }
  @media (min-width: 771px) {
    height: 80px;
  }
`;

export const Price = styled.h2`
  flex-grow: 1;
  color: ${({ theme }) => theme.red};
  font-weight: normal;
  @media (max-width: 666px) {
    width: 100px;
    text-align: center;
  }
`;
