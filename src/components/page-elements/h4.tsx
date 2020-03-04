import React, { ReactNode } from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Theme } from "../../utils/tailwind-types"

import { headings } from "./elements-partials"
type H4Props = {
  children?: ReactNode
}

export const H4: React.FC<H4Props> = ({ children = "" }) => {
  const theme = useTheme<Theme>()
  return (
    <h4
      css={css`
        ${headings}
        ${tw`text-lg sm:text-xl`}
        font-family: ${theme.fontFamily.sans.toString()}
      `}
    >
      {children}
    </h4>
  )
}
