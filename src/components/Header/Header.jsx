import React, { useState } from "react";
import * as S from "./Header.style";
import barbora from "../../assets/barbora.jpg";
import { Link } from "react-router-dom";
import { CartBox, SideBar, Cart } from "../../components";

function Header() {
  const [open, setOpen] = useState(false);

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
          <CartBox />
        </S.RightBlock>
      </S.Container>
      <SideBar
        open={open}
        setOpen={setOpen}
        handleChange={() => setOpen(false)}
      >
        <Cart />
      </SideBar>
    </S.Header>
  );
}

export default Header;
