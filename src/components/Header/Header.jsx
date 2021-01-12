import React from "react";
import * as S from "./Header.style";
import barbora from "../../assets/barbora.jpg";
import { Link } from "react-router-dom";
import { CartBox } from "..";

function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.LeftBlock>
          <Link to="/">
            <S.Logo src={barbora} alt="logo" />
          </Link>
        </S.LeftBlock>
        <S.RightBlock>
          <CartBox />
        </S.RightBlock>
      </S.Container>
    </S.Header>
  );
}

export default Header;
