import React from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

type LineNumberProps = {
  children: number
}

export const LineNumber: React.FC<LineNumberProps> = ({ children }) => {
  return (
    <span
      css={css`
        ${tw`inline-block w-8 opacity-25 select-none`}
      `}
    >
      {children}
    </span>
  )
}
