import React from "react";
import * as S from "./Cart.style";

function Cart({ children }) {
  return (
    <S.Cart>
      <S.Heading>Krepšelis</S.Heading>
      {children}
    </S.Cart>
  );
}

export default Cart;
