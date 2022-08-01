import React from "react";
import {
  StyledBtn,
  HeroBtn,
  StyledBtnWithoutRadius,
  SimpleBtn,
  WideBtn,
  PlayMainBtn,
  PlaySecondaryBtn,
} from "./style";
import Link from "next/link";

export const Button = ({ children, href = "", customType, ...props }) => {
  switch (customType) {
    case "primary":
      return (
        <Link href={href}>
          <StyledBtn {...props}>{children}</StyledBtn>
        </Link>
      );
    case "heroBtn":
      return (
        <Link href={href}>
          <HeroBtn {...props}>{children}</HeroBtn>
        </Link>
      );
    case "simplePrimary":
      return (
        <Link href={href}>
          <StyledBtnWithoutRadius {...props}>{children}</StyledBtnWithoutRadius>
        </Link>
      );
    case "simple":
      return (
        <Link href={href}>
          <SimpleBtn {...props}>{children}</SimpleBtn>
        </Link>
      );
    case "wide":
      return <WideBtn {...props}>{children}</WideBtn>;
    case "playMain":
      return <PlayMainBtn {...props}>{children}</PlayMainBtn>;
    case "playSecondary":
      return <PlaySecondaryBtn {...props}>{children}</PlaySecondaryBtn>;
  }
};
