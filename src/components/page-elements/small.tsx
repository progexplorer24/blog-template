import React, { ReactNode } from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
type SmallProps = {
  children?: ReactNode
}

export const Small: React.FC<SmallProps> = ({ children }) => {
  return (
    <p
      css={css`
        ${tw`mt-1 text-sm italic text-gray-700`}
      `}
    >
      {children}
    </p>
  )
}
