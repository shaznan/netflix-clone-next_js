import React from "react";
import { StyledBtn, HeroBtn, StyledBtnWithoutRadius } from "./style";
import Link from "next/link";

export const Button = ({ children, href = "", customType }) => {
  switch (customType) {
    case "primary":
      return (
        <Link href={href}>
          <StyledBtn>{children}</StyledBtn>
        </Link>
      );
    case "heroBtn":
      return (
        <Link href={href}>
          <HeroBtn>{children}</HeroBtn>
        </Link>
      );
    case "simplePrimary":
      return (
        <Link href={href}>
          <StyledBtnWithoutRadius>{children}</StyledBtnWithoutRadius>
        </Link>
      );
  }
};
