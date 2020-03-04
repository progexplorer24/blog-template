import React from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

type CopyButtonProps = {
  handleClick: () => void
}

export const CopyButton: React.FC<CopyButtonProps> = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      css={css`
        ${tw`absolute px-4 py-1 m-1 text-white rounded-lg opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100`}
        right: 0.25rem;
      `}
    >
      Copy
    </button>
  )
}
