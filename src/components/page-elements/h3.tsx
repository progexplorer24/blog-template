import React, { ReactNode } from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { Theme } from "../../utils/tailwind-types"

import { headings } from "./elements-partials"
type H3Props = {
  children?: ReactNode
}

export const H3: React.FC<H3Props> = ({ children = "" }) => {
  const theme = useTheme<Theme>()
  return (
    <h3
      css={css`
        ${headings}
        ${tw`text-xl sm:text-2xl`}
        font-family: ${theme.fontFamily.sans.toString()}
      `}
    >
      {children}
    </h3>
  )
}
