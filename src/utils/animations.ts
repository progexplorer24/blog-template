import { css } from "@emotion/core"
import tw from "tailwind.macro"

/**
  |--------------------------------------------------
  | 1. Remember to set a parent element to position: relative if you use  animation that uses position: absolute
    2. Import animation styles first and then set your custom animation styling
    3. Set background color of your underline line by using &:after {} selector. If you don't set background color for ::after element it defaults to black
  |--------------------------------------------------
  */

export const animateUnderline = css`
  &:after {
    content: "";
    ${tw`block w-0 h-px bg-black`}
    transition: all 0.3s ease-in-out;
  }
  &:hover:after {
    width: 100%;
  }
`

export const animateUnderlineRightToLeft = css`
  ${animateUnderline}
  &:after {
    position: absolute;
  }
  &:hover:after {
    right: 0;
  }
`

export const animateUnderlineInwards = css`
  ${animateUnderline}
  &:after {
    position: absolute;
  }
  &:hover:before {
    left: 0;
  }
  &:hover:after {
    right: 0;
  }
`

export const animateUnderlineOutwards = css`
  ${animateUnderline}
  &:after {
    position: absolute;
    left: 50%;
  }
  &:hover:after {
    left: 0;
  }
`
