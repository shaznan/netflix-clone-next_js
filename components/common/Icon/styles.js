import styled, { css } from "styled-components";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const iconStyle = css`
  font-size: 1.5em;
  margin-left: 0.5rem;
`;

const circleOutline = css`
  border: 2px solid white;
  padding: 0.3rem;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  line-height: 2.3rem;
`;

export const Play = styled(BsFillPlayCircleFill)`
  ${iconStyle}
  font-size: 2.3em;
`;
export const Plus = styled(AiOutlinePlusCircle)`
  ${iconStyle}
  font-size: 2.4em;
  text-shadow: 0 0 3px white;
`;
export const ThumbsUp = styled(BsHandThumbsUp)`
  ${iconStyle};
  ${circleOutline};
`;
export const ThumbsDown = styled(BsHandThumbsDown)`
  ${circleOutline};
  ${iconStyle};
`;

export const ArrowDown = styled(MdOutlineArrowDropDownCircle)`
  ${iconStyle}
  font-size: 2.3em;
`;
