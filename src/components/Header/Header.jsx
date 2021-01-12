import React from "react";
import * as S from "./Header.style";
import barbora from "../../assets/barbora.jpg";
import { Link } from "react-router-dom";
import { CartBox } from "..";

function Header() {
  return (
    <S.Header>
      <Link to="/">
        <S.Logo src={barbora} alt="logo" />
      </Link>
      <CartBox />
    </S.Header>
  );
}

export default Header;
