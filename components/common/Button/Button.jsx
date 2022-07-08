import React from "react";
import {
  StyledBtn,
  HeroBtn,
  StyledBtnWithoutRadius,
  SimpleBtn,
  WideBtn,
} from "./style";
import Link from "next/link";

export const Button = ({
  children,
  href = "",
  customType,
  onClick = () => {},
}) => {
  switch (customType) {
    case "primary":
      return (
        <Link href={href}>
          <StyledBtn onClick={onClick}>{children}</StyledBtn>
        </Link>
      );
    case "heroBtn":
      return (
        <Link href={href}>
          <HeroBtn onClick={onClick}>{children}</HeroBtn>
        </Link>
      );
    case "simplePrimary":
      return (
        <Link href={href}>
          <StyledBtnWithoutRadius onClick={onClick}>
            {children}
          </StyledBtnWithoutRadius>
        </Link>
      );
    case "simple":
      return (
        <Link href={href}>
          <SimpleBtn onClick={onClick}>{children}</SimpleBtn>
        </Link>
      );
    case "wide":
      return (
        <Link href={href}>
          <WideBtn onClick={onClick}>{children}</WideBtn>
        </Link>
      );
  }
};
