import React, { useContext } from "react";
import { Cart, Section, ProductBox, ProductInCart } from "../../components";
import productList from "../../utils/products";
import * as S from "./Home.style";
import { CartContext } from "../../contexts/cart.context";

function Home() {
  const { products, increase, decrease, deleteProduct } = useContext(
    CartContext
  );

  function renderProduct(id, productInCart) {
    const product = productList.find((product) => {
      return product.id === parseInt(id);
    });

    const price = product.price * productInCart.quantity;
    return (
      <ProductInCart
        key={id}
        name={product.name}
        price={
          price.toString().length < 3
            ? `0,${price}`
            : price.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",")
        }
        image={product.image}
        value={productInCart.quantity}
        handleChange={() => console.log("changed")}
        handleDecrease={() => decrease(id)}
        handleIncrease={() => increase(id)}
        handleDelete={() => deleteProduct(id)}
      />
    );
  }

  return (
    <S.Main>
      <S.Container>
        {/* where all products shows up, in leftblock */}
        <S.LeftBlock>
          {productList &&
            productList.map((product) => {
              return (
                <ProductBox
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              );
            })}
        </S.LeftBlock>
        {/* right block is for cart */}
        <S.RightBlock>
          <Cart>
            {Object.keys(products).map((id) => renderProduct(id, products[id]))}
          </Cart>
        </S.RightBlock>
      </S.Container>
      <Section background="white"></Section>
    </S.Main>
  );
}

export default Home;
