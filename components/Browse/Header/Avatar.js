import React from "react";
import Image from "next/image";
import AvatarImage from "../../../public/images/Netflix-avatar.png";
import styled from "styled-components";
import { MdPlayArrow } from "react-icons/md";

const RenderIcon = styled(MdPlayArrow)`
  color: white;
  transform: rotate(90deg);
  margin-left: 0.3rem;
`;

const RenderImage = ({ className }) => (
  <div className={className}>
    <Image
      alt="Avatar Image"
      placeholder="Avatar"
      src={AvatarImage}
      style={{ borderRadius: "3px" }}
    />
  </div>
);

const StyledImage = styled(RenderImage)`
  max-width: ${({ size }) => (size === "medium" ? "100px" : "33px")};
  height: ${({ size }) => (size === "medium" ? "20px" : "33px")};
  margin-left: 1rem;
`;

const Avatar = ({ size = "large" }) => {
  return (
    <>
      <StyledImage size={size} />
      <RenderIcon />
    </>
  );
};

export default Avatar;
