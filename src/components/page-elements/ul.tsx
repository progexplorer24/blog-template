import React, { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/core"
import tw from "tailwind.macro"

type UlProps = {
  children: ReactNode
  css?: SerializedStyles
}

export const Ul: React.FC<UlProps> = ({ children, ...props }) => {
  return (
    <ul
      css={css`
        ${tw`mt-6 ml-4 text-gray-700 list-disc`}
      `}
      {...props}
    >
      {children}
    </ul>
  )
}
