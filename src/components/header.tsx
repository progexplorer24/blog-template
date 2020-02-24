import React from "react"
import { Link } from "gatsby"

import { css } from "@emotion/core"
import tw from "tailwind.macro"

type HeaderProps = {
  siteTitle: string
  siteDescription: string
}

export const Header: React.FC<HeaderProps> = ({
  siteTitle,
  siteDescription,
}) => {
  return (
    <header>
      <Link to="/">
        <h1
          css={css`
            ${tw`text-5xl text-purple-700`}
          `}
        >
          {siteTitle}
        </h1>
        <p>{siteDescription}</p>
      </Link>
    </header>
  )
}
