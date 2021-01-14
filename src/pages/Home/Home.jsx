import React from "react";
import { Cart, Section, ProductBox, ProductInCart } from "../../components";
import products from "../../utils/products";
import * as S from "./Home.style";

function Home() {
  return (
    <S.Main>
      <S.Container>
        <S.LeftBlock>
          {products &&
            products.map((product) => {
              return (
                <ProductBox
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              );
            })}
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
