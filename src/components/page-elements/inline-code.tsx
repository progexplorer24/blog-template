import React, { ReactNode } from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

type InlineCodeProps = {
  children?: ReactNode
}

export const InlineCode: React.FC<InlineCodeProps> = ({ children }) => {
  return (
    <code
      css={css`
        ${tw`inline-block px-1 text-sm font-normal text-purple-700 whitespace-no-wrap align-baseline bg-gray-200 rounded-sm`}
      `}
    >
      {children}
    </code>
  )
}
