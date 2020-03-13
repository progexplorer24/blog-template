import React from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

type LanguageButtonProps = {
  children?: string
}

type Colors = {
  [key in Languages]: {
    color: string
    text?: string
  }
}

const colors: Colors = {
  js: {
    color: "#F7DF1E",
  },
  jsx: {
    color: "#F7DF1E",
  },
  ts: {
    color: "#007acc",
    text: "#FFFFFF",
  },
  tsx: {
    color: "#007acc",
    text: "#FFFFFF",
  },
  css: {
    color: "#264de4",
  },
  mdx: {
    color: "#F9AC00",
  },
}

type Languages = "js" | "mdx" | "jsx" | "ts" | "tsx" | "css"

export const LanguageButton: React.FC<LanguageButtonProps> = ({
  children = "",
}) => {
  const [language] = Object.keys(colors).filter(
    color => color === children
  ) as Array<Languages>

  return (
    <span
      css={css`
        ${tw`absolute z-10 px-4 py-1 ml-10 text-xs leading-none uppercase bg-gray-400 rounded rounded-t-none`};
        background-color: ${language && colors[language].color
          ? colors[language].color
          : null};
        color: ${language && colors[language].text
          ? colors[language].text
          : null};
      `}
    >
      {children}
    </span>
  )
}
