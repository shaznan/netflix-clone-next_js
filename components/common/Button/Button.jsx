import React from "react";
import {
  StyledBtn,
  HeroBtn,
  StyledBtnWithoutRadius,
  SimpleBtn,
  WideBtn,
} from "./style";
import Link from "next/link";

export const Button = ({ children, href = "", customType }) => {
  console.log(customType, "CHECK");
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
    case "simple":
      return (
        <Link href={href}>
          <SimpleBtn>{children}</SimpleBtn>
        </Link>
      );
    case "wide":
      return (
        <Link href={href}>
          <WideBtn>{children}</WideBtn>
        </Link>
      );
  }
};
