import React, { useContext } from "react";
import * as S from "./Cart.style";
import { Button } from "../../components";
import { CartContext } from "../../contexts/cart.context";

function Cart({ children }) {
  const { totalAmount } = useContext(CartContext);
  return (
    <S.Wrapper>
      <S.Cart>
        <S.Heading>Krepšelis</S.Heading>
        {children}
      </S.Cart>
      <S.BuyBlock>
        <Button>Pirkti</Button>
        <S.FullPrice>
          <S.SmallHeader>
            Kaina <S.Span>ⓘ</S.Span>
          </S.SmallHeader>
          <S.Price>€{totalAmount().toFixed(2)}</S.Price>
        </S.FullPrice>
      </S.BuyBlock>
    </S.Wrapper>
  );
}

export default Cart;
