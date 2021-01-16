import React from "react";
import * as S from "./QuantityBlock.style";

function QuantityBlock({
  value,
  handleChange,
  handleIncrease,
  handleDecrease,
}) {
  return (
    <S.Wrapper>
      <S.InputBlock>
        <S.DecreaseButton onClick={handleDecrease}>-</S.DecreaseButton>
        <S.InputBox>
          <S.Input value={value} onChange={handleChange} />
          vnt.
        </S.InputBox>
        <S.IncreaseButton onClick={handleIncrease}>+</S.IncreaseButton>
      </S.InputBlock>
    </S.Wrapper>
  );
}

export default QuantityBlock;
