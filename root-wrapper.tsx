import React, { ReactNode } from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"

const components = {
  // eslint-disable-next-line react/display-name
  h2: ({ children }): ReactNode => (
    <h2 style={{ color: "rebeccapurple" }}>{children}</h2>
  ),
  // eslint-disable-next-line react/display-name
  "p.inlineCode": (props): ReactNode => (
    <code style={{ backgroundColor: "lightgray" }} {...props} />
  ),
  // eslint-disable-next-line react/display-name
  pre: (props): ReactNode => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)

    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }): ReactNode => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
}

export const wrapRootElement = ({ element }): ReactNode => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
