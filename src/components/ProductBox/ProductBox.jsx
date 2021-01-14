import React from "react";
import { Button } from "../../components";
import * as S from "./ProductBox.style";
import heart from "../../assets/heart.svg";

function ProductBox() {
  return (
    <S.ProductBox>
      <S.Product>
        <S.Favorite src={heart} alt="heart" />
        <S.Image
          src="https://pagrindinis.barbora.lt/api/images/GetInventoryImage?id=80b036cb-5250-4240-8a4f-d3ce468dbe5e"
          alt="image"
        />
        <S.Title>SMETONISKA duonos gira, 2 l</S.Title>
        <S.Price>€1,32</S.Price>
        <S.ButtonBlock>
          <Button color="primary">Į krepšelį</Button>
        </S.ButtonBlock>
      </S.Product>
    </S.ProductBox>
  );
}

export default ProductBox;
