import { css, SerializedStyles } from "@emotion/core"
import { useTheme } from "emotion-theming"
import tw from "tailwind.macro"
import { Theme } from "../utils/tailwind-types"

// Background  background: ${theme.colors.gray["900"]};
//  Tag  color: #ff8383;
// String  color: #b5f4a5;
// Punctuaction  color: #89ddff;
// keyword attr-name   color: #c792ea;
// Comment  color: ${theme.colors.gray["500"]};

export const useSyntaxHighlight = (): SerializedStyles => {
  const theme = useTheme<Theme>()
  console.log("This is my theme object", theme)

  const SyntaxHighlight = css`
    code[class*="language-"],
    pre[class*="language-"] {
      font-family: ${theme.fontFamily.mono.toString()};
      font-size: 14px;
      line-height: 1.375;
      direction: ltr;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
      background: ${theme.colors.gray["800"]};
      color: white;
    }

    pre > code[class*="language-"] {
      font-size: 1em;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: ${theme.colors.gray["500"]};
    }

    .token.punctuation,
    .token.tag.punctuation,
    .token.tag.script.template-string.interpolation.interpolation.punctuation.punctuation,
    .token.tag.script.language-javascript.script-punctuation.punctuation,
    .token.tag.script.language-javascript.punctuation,
    .token.entity {
      color: #89ddff;
    }

    .token.namespace {
      opacity: 0.7;
    }

    .token.tag,
    .token.number {
      color: #ff8383;
    }

    .token.property,
    .token.function,
    .token.tag.script {
      color: #82aaff;
    }

    .token.tag-id,
    .token.selector,
    .token.atrule-id {
      color: #eeebff;
    }

    code.language-javascript,
    .token.operator,
    .token.tag.class-name,
    .token.known-class-name.class-name {
      color: #ffe484;
    }

    .token.keyword,
    .token.attr-name {
      color: #c792ea;
    }

    code.language-css,
    code.language-scss,
    .token.template-string.embedded-code.css,
    .token.boolean,
    .token.string,
    .token.url,
    .language-css .token.string,
    .language-scss .token.string,
    .style .token.string,
    .token.attr-value,
    .token.control,
    .token.directive,
    .token.unit,
    .token.statement,
    .token.regex,
    .token.atrule,
    .token.tag.script.template-string.interpolation,
    .token.tag.script.language-javascript.template-string.string {
      color: #b5f4a5;
    }

    .token.placeholder,
    .token.variable {
      color: #ffcc99;
    }

    .token.deleted {
      text-decoration: line-through;
    }

    .token.inserted {
      border-bottom: 1px dotted #eeebff;
      text-decoration: none;
    }

    .token.italic {
      font-style: italic;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }

    .token.important {
      color: #c4b9fe;
    }

    .token.entity {
      cursor: help;
    }
    /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
    .code-highlight {
      ${tw`pl-2 -ml-4 -mr-4 bg-gray-800 border-l-8 border-purple-900 `}
    }
  `

  return SyntaxHighlight
}
