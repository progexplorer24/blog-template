import React, { ReactNode } from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

type BlockquoteProps = {
  children?: ReactNode
  author?: string
  citeSource?: string
  citeTitle?: string
}

export const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  author = undefined,
  citeSource = undefined,
}) => {
  return (
    <figure
      css={css`
        ${tw`py-1 pl-6 mt-8 text-base italic font-hairline text-gray-700 break-words border-l-4 border-teal-500 md:text-xl`}
      `}
    >
      <blockquote
        cite={typeof citeSource === "undefined" ? undefined : citeSource}
      >
        &ldquo;{children}&rdquo;
      </blockquote>
      {typeof author === "undefined" ? (
        undefined
      ) : (
        <figcaption
          css={css`
            ${tw`block mt-2 text-sm`}
          `}
        >
          &mdash;{" "}
          {typeof citeSource === "undefined" ? (
            author
          ) : (
            <cite>
              <a href={citeSource} target="_blank" rel="noopener noreferrer">
                {author}
              </a>
            </cite>
          )}
        </figcaption>
      )}
    </figure>
  )
}
