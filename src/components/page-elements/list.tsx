import React, { ReactNode } from "react"
import { css, SerializedStyles } from "@emotion/core"
import tw from "tailwind.macro"
import { v4 as uuidv4 } from "uuid"

type ListProps = {
  children?: ReactNode
  css?: SerializedStyles
  ordered?: boolean
  elements?: Array<string>
}

export const List: React.FC<ListProps> = ({
  children = undefined,
  ordered = false,
  elements = [],
  ...props
}) => {
  const listStyles = css`
    ${tw`mt-6 text-gray-700 list-decimal list-inside`}
  `
  const renderBulletListElements = (elements: Array<string>): ReactNode =>
    elements.map(element => <li key={uuidv4()}>{element}</li>)

  const renderOrderedListElements = (elements: Array<string>): ReactNode =>
    elements.map(element => (
      <li key={uuidv4()}>
        {/* Elements are wrapped inside a span to increase the space between a decimal number and list element */}
        <span
          css={css`
            ${tw`pl-1`}
          `}
        >
          {element}
        </span>
      </li>
    ))

  const renderList = (): ReactNode =>
    ordered ? (
      <ol
        css={css`
          ${listStyles}
          ${tw`list-decimal`}
        `}
        {...props}
      >
        {renderOrderedListElements(elements)}
        {children}
      </ol>
    ) : (
      <ul
        css={css`
          ${listStyles}
          ${tw`list-disc`}
        `}
        {...props}
      >
        {renderBulletListElements(elements)}
        {children}
      </ul>
    )

  return <>{renderList()}</>
}
