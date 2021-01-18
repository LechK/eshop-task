import styled from "styled-components";

export const Box = styled.div`
  background-color: ${({ theme }) => theme.white};
  min-width: 310px;
  margin: 2px 0.8em;
  border-radius: 5px;
  @media (min-width: 1061px) {
    min-width: 300px;
  }
`;

export const TrashBin = styled.img`
  max-height: 15px;
  width: 15px;
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
`;

export const Product = styled.div`
  padding: 0.3em 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-right: 1em;
`;

export const MidBlock = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 110px;
  @media (min-width: 1061px) {
    height: 60px;
    max-width: 70px;
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
  max-width: 150px;
`;

export const Price = styled.h2`
  color: ${({ theme }) => theme.red};
  font-weight: bold;
  font-size: 0.9em;
  margin-left: 0.5em;
`;
