import React, { useState } from "react";
import Image from "next/image";
import AvatarImage from "../../../public/images/Netflix-avatar.png";
import styled from "styled-components";
import { MdPlayArrow } from "react-icons/md";

const RenderIcon = styled(MdPlayArrow)`
  color: white;
  transform: rotate(90deg);
  margin-left: 0.3rem;
  cursor: pointer;
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

const Dropdown = styled.div`
  position: relative;
  span {
    position: absolute;
    right: 0;
    top: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(20, 20, 20);
    padding: 0.5rem 1rem;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.1s linear;
    color: rgba(255, 255, 255, 0.8);

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const Avatar = ({ size = "large", signoutHandler }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  //TODO: Need to handle showDropdown

  return (
    <>
      <StyledImage size={size} />
      <RenderIcon onClick={() => setShowDropdown((prevState) => !prevState)} />
      {showDropdown && (
        <Dropdown onMouseLeave={() => setShowDropdown(false)}>
          <span onClick={signoutHandler}>Sign out</span>
        </Dropdown>
      )}
    </>
  );
};

export default Avatar;
