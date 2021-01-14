import React from "react";
import { Cart, Section, ProductBox, ProductInCart } from "../../components";
import * as S from "./Home.style";

function Home() {
  return (
    <S.Main>
      <S.Container>
        <S.LeftBlock>
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </S.LeftBlock>
        <S.RightBlock>
          <Cart>
            <ProductInCart />
          </Cart>
        </S.RightBlock>
      </S.Container>
      <Section background="white"></Section>
    </S.Main>
  );
}

export default Home;
