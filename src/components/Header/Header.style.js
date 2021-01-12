import styled from "styled-components";

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  padding: 1em;
  background-color: ${({ theme }) => theme.white};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1340px;
  margin: 0 auto;
  border: 1px solid green;
`;

export const LeftBlock = styled.div`
  border: 1px solid black;
`;

export const RightBlock = styled.div`
  width: 340px;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;
