import styled from "styled-components";

export const StyledBar = styled.div`
  @media (max-width: 1060px) {
    padding: 0;
  }
  /* transition: transform 0.7s ease-in-out; */
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 100%;
  min-height: 100vh;
  padding: 2em 1em;
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 3;
`;
