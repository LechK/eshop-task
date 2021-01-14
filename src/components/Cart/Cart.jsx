import React from "react";
import * as S from "./Cart.style";
import { Button } from "../../components";

function Cart({ children }) {
  return (
    <S.Cart>
      <S.Heading>Krepšelis</S.Heading>
      {children}
      <S.BuyBlock>
        <Button>Pirkti</Button>
        <S.FullPrice>
          <S.SmallHeader>
            Kaina <S.Span>ⓘ</S.Span>
          </S.SmallHeader>
          <S.Price>€2.08</S.Price>
        </S.FullPrice>
      </S.BuyBlock>
    </S.Cart>
  );
}

export default Cart;
