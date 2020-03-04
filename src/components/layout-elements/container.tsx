import React, { ReactNode } from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"

type ContainerProps = {
  children?: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      css={css`
        ${tw`max-w-3xl px-4 mx-auto my-0`}
      `}
    >
      {children}
    </div>
  )
}
