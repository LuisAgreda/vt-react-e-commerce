import { createContext, useState, useMemo, useCallback } from 'react'

import type { ChildrenType, CardContextType } from '../types'

const defaulContext = {
  count: 0,
  setCount: () => {},
  increaseCount: () => {}
}

const ShoppingContext = createContext<CardContextType>(defaulContext)

const ShoppingProvider = ({ children }: ChildrenType) => {
  const [count, setCount] = useState(0)

  const increaseCount: () => void = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const contextValue = useMemo(() => ({
    count,
    setCount,
    increaseCount,
  }), [count, setCount, increaseCount])

  return (
    <ShoppingContext.Provider value={ contextValue }>
      { children }
    </ShoppingContext.Provider>
  )
}

export { ShoppingContext, ShoppingProvider }
