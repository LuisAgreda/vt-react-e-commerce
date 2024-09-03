import { createContext, useState, useMemo, useCallback, type MouseEvent } from 'react'

import type { ChildrenType, CardContextType, ProductsResponse } from '../types'

const defaulContext = {
  count: 0,
  isProductDetailOpen: false,
  isCheckoutSideMenuOpen: false,
  cartProducts: [],
  setCount: () => {},
  openProductDetail: () => {},
  closeProductDetail: () => {},
  currentProductDetail: {},
  addProducts: () => {},
  setIsCheckoutSideMenuOpen: () => {},
}

const ShoppingContext = createContext<CardContextType>(defaulContext)

const ShoppingProvider = ({ children }: ChildrenType) => {
  const [count, setCount] = useState(0)

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [currentProductDetail, setCurrentProductDetail] = useState({})
  const [cartProducts, setCartProducts] = useState<ProductsResponse[]>([])

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

  const openProductDetail = (currentProduct: ProductsResponse) => {
    setIsProductDetailOpen(true)
    setCurrentProductDetail(currentProduct)
  }

  const closeProductDetail = () => setIsProductDetailOpen(false)

  const addProducts = useCallback((event: MouseEvent, product: ProductsResponse) => {
    event.stopPropagation()

    const newProducts = [...cartProducts]
    newProducts.push(product)

    setCartProducts(newProducts)
    setIsCheckoutSideMenuOpen(true)
    setIsProductDetailOpen(false)
    setCount(cartProducts.length + 1)
  }, [cartProducts])

  const contextValue = useMemo(() => ({
    count,
    setCount,
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail,
    currentProductDetail,
    cartProducts,
    addProducts,
    isCheckoutSideMenuOpen,
    setIsCheckoutSideMenuOpen
  }),
  [
    count,
    setCount,
    isProductDetailOpen,
    currentProductDetail,
    cartProducts,
    addProducts,
    isCheckoutSideMenuOpen
  ])

  return (
    <ShoppingContext.Provider value={ contextValue }>
      { children }
    </ShoppingContext.Provider>
  )
}

export { ShoppingContext, ShoppingProvider }
