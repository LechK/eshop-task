import React from "react";
import { Cart, Section, ProductBox } from "../../components";
import * as S from "./Home.style";

// krepselis 340px width

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
          <Cart></Cart>
        </S.RightBlock>
      </S.Container>
      <Section background="white"></Section>
    </S.Main>
  );
}

export default Home;
