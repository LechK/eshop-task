import React from "react";
import { CloseButton } from "../../components";
import * as S from "./SideBar.style";

function Side({ open, children }) {
  return (
    <S.StyledBar open={open}>
      {children}
      <CloseButton />
    </S.StyledBar>
  );
}

export default Side;
