import React from "react";
import * as S from "./CloseButton.style";

function CloseButton({ handleChange }) {
  return (
    <S.CloseButton onClick={handleChange}>
      <S.Line />
      <S.Line2 />
    </S.CloseButton>
  );
}

export default CloseButton;
