import React, { useContext } from "react";
import * as S from "./QuantityBlock.style";
import { CartContext } from "../../contexts/cart.context";

function QuantityBlock({
  value,
  handleChange,
  handleIncrease,
  handleDecrease,
}) {
  const cart = useContext(CartContext);
  console.log(cart.products);

  return (
    <S.InputBlock>
      <S.DecreaseButton onClick={handleDecrease}>-</S.DecreaseButton>
      <S.InputBox>
        <S.Input value={value} onChange={handleChange} />
        vnt.
      </S.InputBox>
      <S.IncreaseButton onClick={handleIncrease}>+</S.IncreaseButton>
    </S.InputBlock>
  );
}

export default QuantityBlock;
