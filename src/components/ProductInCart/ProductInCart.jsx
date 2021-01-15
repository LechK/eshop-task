import React from "react";
import * as S from "./ProductInCart.style";
import trashBin from "../../assets/trashBin.svg";
import { QuantityBlock } from "../../components";

function ProductInCart({
  id,
  name,
  price,
  image,
  value,
  handleChange,
  handleDecrease,
  handleIncrease,
}) {
  return (
    <S.Box>
      <S.Product id={id}>
        <S.TrashBin src={trashBin} alt="heart" />
        <S.Image src={image} alt="product" />
        <S.MidBlock>
          <S.Title>{name}</S.Title>
          <S.ButtonBlock>
            <QuantityBlock
              value={value}
              handleChange={handleChange}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            />
            <S.Price>€{price}</S.Price>
          </S.ButtonBlock>
        </S.MidBlock>
      </S.Product>
    </S.Box>
  );
}

export default ProductInCart;
