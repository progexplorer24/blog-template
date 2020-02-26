import React, { ReactNode } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/duotoneDark"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import copyToClipboard from "../utils/copy-to-clipboard"

type CodeProps = {
  children: {
    props: {
      parentName: string
      className: string
      originalType: string
      mdxType: string
      children: string
    }
  }
}

export const Code: React.FC<CodeProps> = props => {
  const mdxProps = props.children.props
  const className = mdxProps.className || ""

  const matches = className.match(/language-(?<lang>.*)/)
  const codeString = props.children.props.children.trim()

  /**
  |--------------------------------------------------
  | Remember about the limitations of the live sandbox for now:
  1. You can't use import statement
  2. You must pass parameters that you want to use inside scope
  3. You must use render method to render element
  4. You can't use Emotion Js for styling
  |--------------------------------------------------
  */

  if (mdxProps["react-live"]) {
    const scope = { css }
    return (
      <div>
        <LiveProvider
          code={codeString}
          theme={theme}
          scope={scope}
          noInline={true}
        >
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  const handleClick = (): void => {
    copyToClipboard(codeString)
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
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
        <pre
          className={className}
          style={style}
          css={css`
            ${tw`relative p-2 mx-0 my-4 overflow-x-auto text-left rounded-lg`}
            & .token-line {
              ${tw`h-5 leading-snug`}
            }
            /* font-family: "Courier New", Courier, monospace; */
          `}
        >
          <button
            onClick={handleClick}
            css={css`
              ${tw`absolute px-4 py-1 m-1 text-white rounded-lg opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100`}
              right: 0.25rem;
            `}
          >
            Copy
          </button>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              <span
                css={css`
                  ${tw`inline-block w-8 opacity-25 select-none`}
                `}
              >
                {i + 1}
              </span>
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
}
