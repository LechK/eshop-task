import React from "react";
import { CloseButton } from "../../components";
import * as S from "./SideBar.style";

function Side({ open, children, handleChange }) {
  return (
    <S.StyledBar open={open}>
      {children}
      <CloseButton handleChange={handleChange} />
    </S.StyledBar>
  );
}

export default Side;
