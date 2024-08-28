import React from "react"

import { LayoutType } from "./types"

const Layout: React.FC<LayoutType> = ({ children }) => (
  <div className="max-w-screen-lg mx-auto grid">
    { children }
  </div>
)

export { Layout }
