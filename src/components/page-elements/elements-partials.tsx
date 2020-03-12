import { css } from "@emotion/core"
import tw from "tailwind.macro"

export const headings = css`
  ${tw`flex items-center mt-8 mb-4 font-normal leading-none tracking-tight text-gray-900`}
`

export const linkedHeaders = css`
  a {
    ${tw`pr-1 -ml-5`}
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    a {
      svg {
        ${tw`visible w-4 h-4 text-purple-600 fill-current`}
      }
    }
  }
`
