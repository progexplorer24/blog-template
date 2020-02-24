import { Link } from "gatsby"
import React from "react"

import tw from "tailwind.macro"
import { css } from "@emotion/core"

type Header = {
  siteTitle: string
}

// const StyledHeader = tw.button`
// bg-purple-800 mb-8 w-full
// `

const Header: React.FC<Header> = ({ siteTitle = "" }: Header) => (
  <header
    css={css`
      ${tw`bg-purple-800 mb-8 w-full`}
    `}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
