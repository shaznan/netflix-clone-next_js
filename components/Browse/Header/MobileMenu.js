import React from "react";
import { MobileMenuWrapper, ArrowDownIcon, BrowseTextWrapper } from "../styles";

const MobileMenu = () => {
  return (
    <MobileMenuWrapper>
      <BrowseTextWrapper>Browse</BrowseTextWrapper>
      <ArrowDownIcon />
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
