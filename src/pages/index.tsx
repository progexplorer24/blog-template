import React, { ReactNode } from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

type HomePageProps = {
  children?: ReactNode
}

const Home: React.FC<HomePageProps> = () => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <h1
        css={css`
          ${tw`text-5xl text-purple-700`}
        `}
      >
        {title}
      </h1>
      <p>{description}</p>
    </>
  )
}

export default Home
