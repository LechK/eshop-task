import styled from "styled-components";

export const Button = styled.button`
  width: 174px;
  height: 40px;
  border: none;
  border-radius: ${(props) => (props.color === "primary" ? 25 : 3)}px;
  font-weight: 600;
  font-size: 0.75rem;
  background-color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.background
        : props.theme.secondary.hover.background};
    color: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.color
        : props.theme.secondary.hover.color};
  }
`;
