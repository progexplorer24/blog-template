import React from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import { useTheme } from "emotion-theming"
import { Theme } from "../../utils/tailwind-types"

type HrProps = {}

export const Hr: React.FC<HrProps> = () => {
  const theme = useTheme<Theme>()

  console.log(typeof theme.colors.gray[500])

  return (
    <hr
      css={css`
        ${tw`relative h-6 text-center border-0 outline-none opacity-50`}
        &:before {
          content: "";
          background: linear-gradient(
            to right,
            transparent,
            ${theme.colors.gray[700]},
            transparent
          );
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
        }
        &:after {
          content: attr(data-content);
          ${tw`relative inline-block px-2 py-0 leading-normal text-gray-700 bg-white`}
        }
      `}
      data-content="Welcome"
    />
  )
}
