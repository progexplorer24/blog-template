import React from "react"
import { SerializedStyles } from "@emotion/core"

type DumpProps = {
  [key: string]: unknown
  css?: SerializedStyles
}

export const Dump: React.FC<DumpProps> = ({ css, ...rest }) => (
  <div
    style={{
      fontSize: 20,
      border: "1px solid #efefef",
      padding: 10,
      background: "white",
    }}
    {...css}
  >
    {Object.entries(rest).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: "white", background: "red" }}>{key} 💩</strong>
        {JSON.stringify(val, null, " ")}
      </pre>
    ))}
  </div>
)
