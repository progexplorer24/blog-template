import React, { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {
  // eslint-disable-next-line react/display-name
  h2: ({ children }): ReactNode => (
    <h2 style={{ color: "rebeccapurple" }}>{children}</h2>
  ),
  // eslint-disable-next-line react/display-name
  "p.inlineCode": (props): ReactNode => (
    <code style={{ backgroundColor: "lightgray" }} {...props} />
  ),
}

export const wrapRootElement = ({ element }): ReactNode => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
