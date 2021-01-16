import React, { useContext, useCallback } from "react";
import { Button, QuantityBlock } from "../../components";
import * as S from "./ProductBox.style";
import heart from "../../assets/heart.svg";
import { CartContext } from "../../contexts/cart.context";

function ProductBox({ id, name, price, image }) {
  const { increase, products, decrease } = useContext(CartContext);

  const onAddToCart = useCallback(() => {
    increase(id);
  }, [id, increase]);

  const onRemoveFromCart = useCallback(() => {
    decrease(id);
  }, [id, decrease]);

  return (
    <S.ProductBox>
      <S.Product>
        <S.Favorite src={heart} alt="heart" />
        <S.Image src={image} alt="product" />
        <S.Title>{name}</S.Title>
        <S.Price>€{price}</S.Price>
        <S.ButtonBlock>
          {products[id] ? (
            <QuantityBlock
              handleChange={console.log("yay")}
              className="qtyblck"
              handleIncrease={onAddToCart}
              handleDecrease={onRemoveFromCart}
              value={products[id].quantity}
            />
          ) : (
            <Button color="primary" handleClick={onAddToCart}>
              Į krepšelį
            </Button>
          )}
        </S.ButtonBlock>
      </S.Product>
    </S.ProductBox>
  );
}

export default ProductBox;
