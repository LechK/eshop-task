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
  max-width: 1320px;
  margin: 0 auto;
`;

export const LeftBlock = styled.div``;

export const RightBlock = styled.div`
  width: 350px;
  box-sizing: border-box;
  @media (min-width: 1061px) {
    &.mobile {
      display: none;
    }
  }
  @media (max-width: 1060px) {
    &.fullscreen {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;
