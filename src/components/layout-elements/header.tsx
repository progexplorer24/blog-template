import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

import { ReactComponent as HamburgerIcon } from "../../images/icon-menu.svg"
import { NavLink } from "./nav-link"

type HeaderProps = {
  siteTitle: string
  siteDescription: string
}

export const Header: React.FC<HeaderProps> = ({
  siteTitle,
  siteDescription,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      css={css`
        ${tw`fixed w-full bg-gray-100`}
        top: 0;
      `}
    >
      <nav
        css={css`
          ${tw`px-4 py-3`}
          ${isOpen ? tw`block` : tw`flex items-center justify-between`}
        `}
      >
        <Link to="/">
          <span
            css={css`
              ${tw`h-10 min-h-full text-3xl text-purple-700`}
            `}
          >
            Logo
          </span>
        </Link>

        <button
          css={css`
            ${tw`flex items-center justify-center w-10 h-10 md:hidden`}
          `}
          onClick={(): void => setIsOpen(!isOpen)}
        >
          <HamburgerIcon
            css={css`
              ${tw`w-8 h-8 text-gray-900 fill-current`}
            `}
          />
        </button>

        {isOpen ? (
          <div>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">Learn</NavLink>
          </div>
        ) : null}
      </nav>
    </header>
  )
}
