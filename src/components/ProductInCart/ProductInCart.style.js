import styled from "styled-components";

export const Box = styled.div`
  background-color: ${({ theme }) => theme.white};
  min-width: 330px;
  margin: 0.8em;
`;

export const TrashBin = styled.img`
  max-height: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Product = styled.div`
  padding: 1em 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-right: 20px;
`;

export const MidBlock = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
`;

export const Image = styled.img`
  object-fit: contain;
  height: 110px;
  @media (min-width: 1061px) {
    height: 90px;
  }
  @media (max-width: 440px) {
    height: 70px;
    max-width: 80px;
  }
`;

export const Title = styled.p`
  cursor: pointer;
  word-break: break-all;
  max-width: 160px;
  margin: 0;
  text-align: left;
  font-size: 0.8em;
  padding-bottom: 1.5em;
  color: ${({ theme }) => theme.grey};
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.red};
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Price = styled.h2`
  color: ${({ theme }) => theme.red};
  font-weight: bold;
  font-size: 1em;
  margin-left: 1em;
`;
