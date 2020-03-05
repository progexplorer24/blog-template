/* eslint-disable react/display-name */
import React, { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"
import { ThemeProvider } from "emotion-theming"
import { GlobalStyle, theme } from "./src/utils/global-styles"

import { Code } from "./src/components/page-elements/code"
import {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  TextHr,
  InlineCode,
} from "./src/components/page-elements"

const components = {
  h1: (props): ReactNode => <H1 {...props} />,
  h2: (props): ReactNode => <H2 {...props} />,
  h3: (props): ReactNode => <H3 {...props} />,
  h4: (props): ReactNode => <H4 {...props} />,
  p: (props): ReactNode => <P {...props} />,
  inlineCode: (props): ReactNode => <InlineCode {...props} />,
  pre: (props): ReactNode => {
    return <Code {...props} />
  },
  Blockquote,
  TextHr,
}

export const wrapRootElement = ({ element }): ReactNode => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
  </>
)
