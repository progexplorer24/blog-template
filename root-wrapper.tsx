/* eslint-disable react/display-name */
import React, { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"
import { ThemeProvider } from "emotion-theming"
import { GlobalStyles, theme } from "./src/utils/global-styles"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

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
  Small,
  Hr,
  List,
} from "./src/components/page-elements"

const components = {
  h1: (props): ReactNode => <H1 {...props} />,
  h2: (props): ReactNode => <H2 {...props} />,
  h3: (props): ReactNode => <H3 {...props} />,
  h4: (props): ReactNode => <H4 {...props} />,
  p: (props): ReactNode => <P {...props} />,
  inlineCode: (props): ReactNode => <InlineCode {...props} />,
  hr: (props): ReactNode => <Hr {...props} />,
  ul: (props): ReactNode => <List {...props} />,
  ol: (props): ReactNode => <List ordered {...props} />,
  a: (props): ReactNode => (
    <a
      {...props}
      css={css`
        ${tw`inline-block text-teal-600 underline hover:text-teal-800`}
      `}
    />
  ),
  pre: (props): ReactNode => <Code {...props} />,
  img: (props): ReactNode => (
    <img
      {...props}
      css={css`
        ${tw`rounded-lg`}
      `}
    />
  ),
  Blockquote,
  TextHr,
  List,
  Small,
}

export const wrapRootElement = ({ element }): ReactNode => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
  </>
)
