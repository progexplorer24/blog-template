import React from "react"
import { Global, css } from "@emotion/core"
import base from "tailwindcss/base.css"
import defaultConfig from "tailwindcss/defaultConfig"
import { Theme } from "./tailwind-types"

export const theme = {
  ...defaultConfig.theme,
}

type TailwindTheme = Theme

type GlobalStylesProps = {
  theme: TailwindTheme
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
        scroll-behavior: smooth;
      }

      body {
        line-height: 1.9;
      }
    `}
  />
)
