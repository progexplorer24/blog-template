import React from "react"
import { Global, css } from "@emotion/core"
import base from "tailwindcss/base.css"

export const theme = {
  fonts: {
    sans: "Poppins, sans-serif",
    serif: "Pridi, sans",
    monospace: '"Space Mono", monospace',
  },
}

type GlobalStylesProps = {
  theme: {
    fonts: {
      sans: string
      serif: string
      monospace: string
    }
  }
}

export const GlobalStyle: React.FC<GlobalStylesProps> = ({ theme }) => (
  <Global
    styles={css`
      ${base}
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }

      html {
        box-sizing: border-box;
        font-family: ${theme.fonts.sans};
        scroll-behavior: smooth;
      }

      body {
        line-height: 1.9;
      }
    `}
  />
)
