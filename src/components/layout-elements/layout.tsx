import React, { ReactNode } from "react"

import { Header } from "../header"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import { Container } from "./container"

type LayoutProps = {
  children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <main>
      <Header siteTitle={title} siteDescription={description} />

      <Container>{children}</Container>
    </main>
  )
}
