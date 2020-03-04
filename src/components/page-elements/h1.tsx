import React, { ReactNode } from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Theme } from "../../utils/tailwind-types"

import { headings } from "./elements-partials"
type H1Props = {
  children?: ReactNode
}

export const H1: React.FC<H1Props> = ({ children = "" }) => {
  const theme = useTheme<Theme>()
  return (
    <h1
      css={css`
        ${headings}
        ${tw`text-3xl sm:text-4xl`}
        font-family: ${theme.fontFamily.sans.toString()}
      `}
    >
      {children}
    </h1>
  )
}
