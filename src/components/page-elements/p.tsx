import React, { ReactNode } from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
type PProps = {
  children?: ReactNode
  strong?: boolean
  em?: boolean
}

export const P: React.FC<PProps> = ({
  children,
  strong = false,
  em = false,
}) => {
  return (
    <p
      css={css`
        ${tw`mt-6 text-base leading-relaxed text-gray-700 break-words`}
        ${strong ? tw`font-bold` : null};
        ${em ? tw`italic` : null};
      `}
    >
      {children}
    </p>
  )
}
