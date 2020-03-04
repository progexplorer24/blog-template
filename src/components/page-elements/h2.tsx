import React, { ReactNode } from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Theme } from "../../utils/tailwind-types"

import { headings } from "./elements-partials"
type H2Props = {
  children?: ReactNode
}

export const H2: React.FC<H2Props> = ({ children = "" }) => {
  const theme = useTheme<Theme>()
  return (
    <h2
      css={css`
        ${headings}
        ${tw`text-2xl sm:text-3xl`}
        font-family: ${theme.fontFamily.sans.toString()}
      `}
    >
      {children}
    </h2>
  )
}
