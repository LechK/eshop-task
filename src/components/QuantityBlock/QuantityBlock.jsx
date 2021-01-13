import React from "react";
import * as S from "./QuantityBlock.style";

function QuantityBlock({ value }) {
  return (
    <S.InputBlock>
      <S.DecreaseButton>-</S.DecreaseButton>
      <S.InputBox>
        <S.Input value={value} />
        vnt.
      </S.InputBox>
      <S.IncreaseButton>+</S.IncreaseButton>
    </S.InputBlock>
  );
}

export default QuantityBlock;
