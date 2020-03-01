import React, { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import { Code } from "./src/components/code"
import { GlobalStyle, theme } from "./src/utils/global-styles"

const components = {
  // eslint-disable-next-line react/display-name
  h2: ({ children }): ReactNode => (
    <h2
      css={css`
        ${tw`text-4xl text-purple-700`}
      `}
    >
      {children}
    </h2>
  ),
  // eslint-disable-next-line react/display-name
  "p.inlineCode": (props): ReactNode => (
    <code style={{ backgroundColor: "lightgray" }} {...props} />
  ),
  // eslint-disable-next-line react/display-name
  pre: (props): ReactNode => {
    return <Code {...props} />
  },
}

export const wrapRootElement = ({ element }): ReactNode => (
  <>
    <GlobalStyle theme={theme} />
    <MDXProvider components={components}>{element}</MDXProvider>
  </>
)
