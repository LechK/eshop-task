import React from "react";
import * as S from "./CartBox.style";
import cart from "../../assets/cart.svg";

function CartBox() {
  return (
    <S.Box>
      <S.Counter>14</S.Counter>
      <S.Cart src={cart} />
      <S.Price>€2,08 </S.Price>
    </S.Box>
  );
}

export default CartBox;
