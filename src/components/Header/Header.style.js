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
`;

export const LeftBlock = styled.div`
  padding-left: 1.3em;
`;

export const RightBlock = styled.div`
  width: 340px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;
