import React, { ReactNode } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import copyToClipboard from "../../utils/copy-to-clipboard"
import { CopyButton } from "../code-blocks/copy-button"
import { LineNumber } from "../code-blocks/line-number"
import { LanguageButton } from "../code-blocks/language-button"

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

  const handleClick = (): void => {
    copyToClipboard(codeString)
  }

  const metaString = mdxProps.metastring || ""

  console.log(metaString)

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={undefined}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }): ReactNode => (
        <div
          css={css`
            ${tw`relative`}
          `}
        >
          {matches.groups.lang ? (
            <LanguageButton>{matches.groups.lang}</LanguageButton>
          ) : null}
          <CopyButton handleClick={handleClick}>Copy</CopyButton>
          <pre
            className={className}
            style={style}
            css={css`
              ${tw`relative px-4 pt-8 pb-2 my-2 overflow-x-auto scrolling-touch text-left rounded-lg`}
              & .token-line {
                ${tw`h-5 leading-snug`}
              }
              /* width */
              ::-webkit-scrollbar {
                ${tw`h-2`}
              }

              /* Track */
              ::-webkit-scrollbar-track {
                ${tw`bg-teal-900`}
              }

              /* Handle */
              ::-webkit-scrollbar-thumb {
                ${tw`bg-teal-700`}
              }
            `}
          >
            <code
              css={css`
                ${tw`inline-block min-w-full`}
              `}
            >
              {tokens.map((line, i) => (
                // eslint-disable-next-line react/jsx-key
                <div
                  className="wiggy"
                  {...getLineProps({
                    line,
                    key: i,
                  })}
                >
                  {/* {console.log(
                    getLineProps({
                      line,
                      key: i,
                      className: `code-highlight`,
                    })
                  )} */}
                  <LineNumber>{i + 1}</LineNumber>
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/jsx-key
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  )
}
