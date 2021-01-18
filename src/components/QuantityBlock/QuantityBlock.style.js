import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 770px) {
    justify-content: right;
  }
`;

export const InputBlock = styled.div`
  height: 38px;
  width: 174px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 770px) {
    margin: 0;
    margin-left: auto;
  }
`;

export const DecreaseButton = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.grey};
  background-color: ${({ theme }) => theme.white};
  border-radius: 25px 0 0 25px;
  height: 32px;
  max-width: 48px;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-right: none;
  padding: 0 1em;
  flex-grow: 1;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;

export const IncreaseButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.grey};
  background-color: ${({ theme }) => theme.white};
  border-radius: 0 25px 25px 0;
  height: 32px;
  max-width: 48px;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-left: none;
  padding: 0 1em;
  flex-grow: 1;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;

export const Input = styled.input`
  max-width: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.grey};
  border: none;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  flex-grow: 1;
  justify-content: center;
  font-size: small;
  color: ${({ theme }) => theme.grey};
  background-color: ${({ theme }) => theme.white};
`;
