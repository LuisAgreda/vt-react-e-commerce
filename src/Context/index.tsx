import { createContext, useState, useMemo, useCallback, type MouseEvent } from 'react'

import type { ChildrenType, CardContextType, ProductsResponse } from '../types'

const defaulContext = {
  count: 0,
  isProductDetailOpen: false,
  setCount: () => {},
  increaseCount: () => {},
  openProductDetail: () => {},
  closeProductDetail: () => {},
  currentProductDetail: {}
}

const ShoppingContext = createContext<CardContextType>(defaulContext)

const ShoppingProvider = ({ children }: ChildrenType) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [currentProductDetail, setCurrentProductDetail] = useState({})

  const increaseCount = useCallback((event: MouseEvent) => {
    event.stopPropagation()
    setCount(count + 1)
  }, [count])

  const openProductDetail = (currentProduct: ProductsResponse) => {
    setIsProductDetailOpen(true)
    setCurrentProductDetail(currentProduct)
  }

  const closeProductDetail = () => setIsProductDetailOpen(false)

  const contextValue = useMemo(() => ({
    count,
    setCount,
    increaseCount,
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail,
    currentProductDetail,
  }), [count, setCount, increaseCount, isProductDetailOpen, currentProductDetail])

  return (
    <ShoppingContext.Provider value={ contextValue }>
      { children }
    </ShoppingContext.Provider>
  )
}

export { ShoppingContext, ShoppingProvider }
