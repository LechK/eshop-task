import React from "react";
import * as S from "./CartBox.style";
import cart from "../../assets/cart.svg";
import basket from "../../assets/basket.svg";

function CartBox({ className, handleChange, counter, total }) {
  switch (className) {
    case "mobile":
      return (
        <S.Box onClick={handleChange}>
          <S.Cart src={basket} />
          <S.Price>€{total}</S.Price>
        </S.Box>
      );
    default:
      return (
        <S.Box>
          <S.Counter>{counter}</S.Counter>
          <S.Cart src={cart} />
          <S.Price>€{total}</S.Price>
        </S.Box>
      );
  }
}

export default CartBox;
