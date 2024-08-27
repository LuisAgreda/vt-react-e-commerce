import React from "react"

import { LayoutType } from "./types"

const Layout: React.FC<LayoutType> = ({ children }) => (
  <div className="grid justify-center">
    { children }
  </div>
)

export { Layout }
