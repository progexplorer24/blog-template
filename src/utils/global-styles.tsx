import React from "react"
import { Global, css } from "@emotion/core"
import defaultConfig from "tailwindcss/defaultConfig"
import tw from "tailwind.macro"

import base from "tailwindcss/base.css"
import { Theme } from "./tailwind-types"

export const theme: Theme = {
  ...defaultConfig.theme,
  fontFamily: {
    sans: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      '"Fira sans"',
      '"Droid Sans"',
      "Helvetica",
      "Neue",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
    serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
    mono: [
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace",
    ],
  },
}

type GlobalStylesProps = {}

export const GlobalStyles: React.FC<GlobalStylesProps> = () => (
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
        ${tw`leading-normal text-gray-900 bg-gray-100`}
      }
    `}
  />
)
