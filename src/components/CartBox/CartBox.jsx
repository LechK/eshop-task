import React from "react";
import * as S from "./CartBox.style";
import cart from "../../assets/cart.svg";
import basket from "../../assets/basket.svg";

function CartBox({ className, handleChange }) {
  switch (className) {
    case "mobile":
      return (
        <S.Box onClick={handleChange}>
          <S.Cart src={basket} />
          <S.Price>€2,08</S.Price>
        </S.Box>
      );
    default:
      return (
        <S.Box>
          <S.Counter>14</S.Counter>
          <S.Cart src={cart} />
          <S.Price>€2,08 </S.Price>
        </S.Box>
      );
  }
}

export default CartBox;
