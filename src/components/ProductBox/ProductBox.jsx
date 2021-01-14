import React from "react";
import { Button } from "../../components";
import * as S from "./ProductBox.style";
import heart from "../../assets/heart.svg";

function ProductBox({ name, price, image }) {
  const formatted =
    price.toString().length < 3
      ? `0,${price}`
      : price.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");

  return (
    <S.ProductBox>
      <S.Product>
        <S.Favorite src={heart} alt="heart" />
        <S.Image src={image} alt="product" />
        <S.Title>{name}</S.Title>
        <S.Price>€{formatted}</S.Price>
        <S.ButtonBlock>
          <Button color="primary">Į krepšelį</Button>
        </S.ButtonBlock>
      </S.Product>
    </S.ProductBox>
  );
}

export default ProductBox;
