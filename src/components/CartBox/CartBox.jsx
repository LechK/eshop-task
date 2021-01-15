import React from "react";
import * as S from "./CartBox.style";
import cart from "../../assets/cart.svg";
import basket from "../../assets/basket.svg";

function CartBox({ className, handleChange, counter }) {
  switch (className) {
    case "mobile":
      return (
        <S.Box onClick={handleChange}>
          <S.Cart src={basket} />
          <S.Price>€unset</S.Price>
        </S.Box>
      );
    default:
      return (
        <S.Box>
          <S.Counter>{counter}</S.Counter>
          <S.Cart src={cart} />
          <S.Price>€unset </S.Price>
        </S.Box>
      );
  }
}

export default CartBox;
