import React from "react"
import { css, SerializedStyles } from "@emotion/core"
import tw from "tailwind.macro"
import { useTheme } from "emotion-theming"
import { Theme } from "../../utils/tailwind-types"

type HrProps = {
  text?: string
  css?: SerializedStyles
}

export const TextHr: React.FC<HrProps> = ({ text, ...props }) => {
  const theme = useTheme<Theme>()

  return (
    <hr
      css={css`
        ${tw`relative h-6 my-16 text-center border-0 outline-none `}
        &:before {
          content: "";
          background: linear-gradient(
            to right,
            transparent,
            ${theme.colors.gray[500]},
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
          ${tw`relative inline-block px-2 py-0 leading-normal text-gray-600 bg-gray-100`}
        }
      `}
      {...props}
      data-content={text ? text : ""}
    />
  )
}
