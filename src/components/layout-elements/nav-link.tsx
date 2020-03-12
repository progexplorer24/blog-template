import React, { ReactNode } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

type NavLinkProps = {
  children: ReactNode
  to: string
}

export const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <Link
      css={css`
        ${tw`block px-2 py-3 text-base font-thin tracking-widest uppercase`}
      `}
      {...props}
    >
      {children}
    </Link>
  )
}
