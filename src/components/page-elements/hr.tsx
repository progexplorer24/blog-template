import React from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"

type Hr = {}

export const Hr: React.FC<Hr> = () => {
  return (
    <hr
      css={css`
        ${tw`my-16 border-t border-gray-300`}
      `}
    />
  )
}
