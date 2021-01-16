import React, { useContext, useCallback } from "react";
import { Button } from "../../components";
import * as S from "./ProductBox.style";
import heart from "../../assets/heart.svg";
import { CartContext } from "../../contexts/cart.context";

function ProductBox({ id, name, price, image }) {
  const { increase } = useContext(CartContext);

  const formatted =
    price.toString().length < 3
      ? `0,${price}`
      : price.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");

  const onAddToCart = useCallback(() => {
    increase(id);
  }, [id, increase]);

  return (
    <S.ProductBox>
      <S.Product>
        <S.Favorite src={heart} alt="heart" />
        <S.Image src={image} alt="product" />
        <S.Title>{name}</S.Title>
        <S.Price>€{formatted}</S.Price>
        <S.ButtonBlock>
          <Button color="primary" handleClick={onAddToCart}>
            Į krepšelį
          </Button>
        </S.ButtonBlock>
      </S.Product>
    </S.ProductBox>
  );
}

export default ProductBox;
