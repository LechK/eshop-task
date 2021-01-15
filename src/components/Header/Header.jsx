import React, { useState, useContext } from "react";
import * as S from "./Header.style";
import barbora from "../../assets/barbora.jpg";
import { Link } from "react-router-dom";
import { CartBox, SideBar, Cart, ProductInCart } from "../../components";
import { CartContext } from "../../contexts/cart.context";

function Header() {
  const [open, setOpen] = useState(false);

  const cart = useContext(CartContext);

  return (
    <S.Header>
      <S.Container>
        <S.LeftBlock>
          <Link to="/">
            <S.Logo src={barbora} alt="logo" />
          </Link>
        </S.LeftBlock>
        <S.RightBlock className="mobile">
          <CartBox className="mobile" handleChange={() => setOpen(true)} />
        </S.RightBlock>
        <S.RightBlock className="fullscreen">
          <CartBox counter={cart.products.length} />
        </S.RightBlock>
      </S.Container>
      <SideBar
        open={open}
        setOpen={setOpen}
        handleChange={() => setOpen(false)}
      >
        <Cart>
          <ProductInCart />
        </Cart>
      </SideBar>
    </S.Header>
  );
}

export default Header;
