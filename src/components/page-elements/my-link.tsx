import React, { ReactNode } from "react"
import { Link as GatsbyLink } from "gatsby"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
type MyLinkProps = {
  children?: ReactNode
  external?: boolean
  address: string
}

export const MyLink: React.FC<MyLinkProps> = ({
  children,
  external = false,
  address,
}) => {
  const linkStyles = css`
    ${tw`relative inline-block text-teal-600 underline hover:text-teal-800`}
  `

  return (
    <>
      {external ? (
        <a
          href={address}
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            ${linkStyles}
          `}
        >
          {children}
        </a>
      ) : (
        <GatsbyLink
          to={address}
          css={css`
            ${linkStyles}
          `}
        >
          {children}
        </GatsbyLink>
      )}
    </>
  )
}
