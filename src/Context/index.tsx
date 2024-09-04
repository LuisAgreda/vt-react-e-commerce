import { createContext, useState, useMemo, useCallback, type MouseEvent } from 'react'

import type { ChildrenType, CardContextType, ProductsResponse } from '../types'

const defaulContext = {
  count: 0,
  isProductDetailOpen: false,
  isCheckoutSideMenuOpen: false,
  cartProducts: [],
  currentProductId: null,
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

  const [currentProductId, setCurrentProductId] = useState<number | null>(null)

  const openProductDetail = (currentProduct: ProductsResponse) => {
    setIsProductDetailOpen(true)
    setCurrentProductDetail(currentProduct)
  }

  const closeProductDetail = () => setIsProductDetailOpen(false)

  const isProductInCart = (cart: ProductsResponse[], product: ProductsResponse) => cart.some(current => current.id === product.id)

  const addProducts = useCallback((event: MouseEvent, product: ProductsResponse) => {
    event.stopPropagation()

    if (currentProductId) return

    const newProducts = [...cartProducts]

    if (isProductInCart(newProducts, product)) {
      newProducts.forEach(curProduct => {
        if (curProduct.id === product.id) {
          curProduct.amount = curProduct.amount! + 1
        }
      })
    } else {
      newProducts.push({...product, amount: 1})
      setCount(cartProducts.length + 1)
    }

    setCartProducts(newProducts)
    setIsCheckoutSideMenuOpen(true)
    setIsProductDetailOpen(false)

    setCurrentProductId(product.id)

    setTimeout(() => {
      setCurrentProductId(null)
    }, 500)
  }, [cartProducts, currentProductId])

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
    setIsCheckoutSideMenuOpen,
    currentProductId
  }),
  [
    count,
    setCount,
    isProductDetailOpen,
    currentProductDetail,
    cartProducts,
    addProducts,
    isCheckoutSideMenuOpen,
    currentProductId
  ])

  return (
    <ShoppingContext.Provider value={ contextValue }>
      { children }
    </ShoppingContext.Provider>
  )
}

export { ShoppingContext, ShoppingProvider }
