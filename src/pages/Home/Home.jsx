import React, { useContext } from "react";
import { Cart, Section, ProductBox, ProductInCart } from "../../components";
import products from "../../utils/products";
import * as S from "./Home.style";
import { CartContext } from "../../contexts/cart.context";

function Home() {
  const cart = useContext(CartContext);

  const cartItems = cart.products.map((item) => ({
    value: item,
    quantity: cart.products.filter((x) => x === item).length,
  }));

  const uniqueItems = cartItems.filter(
    (item, index) =>
      cartItems.findIndex((x) => x.value === item.value) === index
  );

  function findProduct(item) {
    console.log(item);
    const selectedProduct = products.find(
      (product) => product.id === item.value
    );

    return (
      <ProductInCart
        key={item.value}
        name={selectedProduct.name}
        price={selectedProduct.price * item.quantity}
        image={selectedProduct.image}
        value={item.quantity}
        handleChange={() => console.log("lolo")}
        handleDecrease={() => console.log("yay")}
        handleIncrease={() =>
          cart.setProducts(cart.products.concat([item.value]))
        }
      />
    );
  }

  return (
    <S.Main>
      <S.Container>
        {/* where all products shows up, in leftblock */}
        <S.LeftBlock>
          {products &&
            products.map((product) => {
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
            {uniqueItems && uniqueItems.map((item) => findProduct(item))}
          </Cart>
        </S.RightBlock>
      </S.Container>
      <Section background="white"></Section>
    </S.Main>
  );
}

export default Home;
