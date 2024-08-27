import React from "react"

import { LayoutType } from "./types"

const Layout: React.FC<LayoutType> = ({ children }) => (
  <div className="grid items-center">
    { children }
  </div>
)

export { Layout }
