import styled from "styled-components";

export const CloseButton = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 2px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const Line = styled.div`
  border: 1px solid white;
  margin-top: 8px;
  width: 16px;
  position: absolute;
  transform: rotate(45deg);
`;
export const Line2 = styled.div`
  border: 1px solid white;
  width: 16px;
  position: relative;
  margin-top: 8px;
  transform: rotate(135deg);
`;
