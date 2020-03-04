import React, { ReactNode } from "react"
import { Link as GatsbyLink } from "gatsby"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import { Theme } from "../../utils/tailwind-types"
import { useTheme } from "emotion-theming"
import { animateUnderlineOutwards } from "../../utils/animations"
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
  const theme = useTheme<Theme>()
  console.log(theme.colors.teal["500"])

  const linkStyles = css`
    ${animateUnderlineOutwards}
    ${tw`relative inline-block text-teal-500`}
    &:after {
      ${tw`bg-teal-500`}
    }
  `

  return (
    <>
      {external ? (
        <a
          href="address"
          target="_blank"
          rel="noopener noreferrer"
          css={`
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
