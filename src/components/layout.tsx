import React, { ReactNode } from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

import { Header } from "./header"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

type LayoutProps = {
  children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <main
      css={css`
        ${tw`max-w-2xl mx-auto my-0`}
      `}
    >
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </main>
  )
}
