import React from "react";
import * as S from "./ProductInCart.style";
import trashBin from "../../assets/trashBin.svg";
import { QuantityBlock } from "../../components";

function ProductInCart() {
  return (
    <S.Box>
      <S.Product>
        <S.TrashBin src={trashBin} alt="heart" />
        <S.Image
          src="https://pagrindinis.barbora.lt/api/images/GetInventoryImage?id=80b036cb-5250-4240-8a4f-d3ce468dbe5e"
          alt="image"
        />
        <S.MidBlock>
          <S.Title>SMETONISKA duonos asdasda das dsa asgira, 2 l</S.Title>
          <S.ButtonBlock>
            <QuantityBlock />
            <S.Price>€555,32</S.Price>
          </S.ButtonBlock>
        </S.MidBlock>
      </S.Product>
    </S.Box>
  );
}

export default ProductInCart;
