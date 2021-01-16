import React, { useContext, useCallback } from "react";
import { Button, QuantityBlock } from "../../components";
import * as S from "./ProductBox.style";
import heart from "../../assets/heart.svg";
import { CartContext } from "../../contexts/cart.context";

function ProductBox({ id, name, price, image }) {
  const { increase, products, decrease, setQuantity } = useContext(CartContext);

  const onAddToCart = useCallback(() => {
    increase(id, { name, price, image });
  }, [id, increase, name, price, image]);

  const onRemoveFromCart = useCallback(() => {
    decrease(id);
  }, [id, decrease]);

  function changeInputValue(quantity) {
    setQuantity(quantity, id);
  }

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
              handleChange={(e) => changeInputValue(e.target.value)}
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
