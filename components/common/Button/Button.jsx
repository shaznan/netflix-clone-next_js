import React from "react";
import { StyledBtn } from "./style";
import Link from "next/link";

export const PrimaryButton = ({ text, href }) => {
  return (
    <Link href={href}>
      <StyledBtn>{text}</StyledBtn>
    </Link>
  );
};
