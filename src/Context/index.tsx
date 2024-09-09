import { createContext, useState, useMemo, useCallback, type MouseEvent } from 'react'

import { getDate } from '../utils'

import type { ChildrenType, CardContextType, ProductsResponse, OrderType } from '../types'

const defaulContext = {
  count: 0,
  isProductDetailOpen: false,
  isCheckoutSideMenuOpen: false,
  cartProducts: [],
  currentProductId: null,
  currentProductDetail: {},
  myOrders: [],
  setCount: () => {},
  openProductDetail: () => {},
  closeProductDetail: () => {},
  addProducts: () => {},
  setIsCheckoutSideMenuOpen: () => {},
  deleteProduct: () => {},
  handleCheckout: () => {}
}

const ShoppingContext = createContext<CardContextType>(defaulContext)

const ShoppingProvider = ({ children }: ChildrenType) => {
  // States
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [currentProductDetail, setCurrentProductDetail] = useState({})
  const [cartProducts, setCartProducts] = useState<ProductsResponse[]>([])
  const [myOrders, setMyOrders] = useState<OrderType[]>([])
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [currentProductId, setCurrentProductId] = useState<number | null>(null)

  // Functions
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
          curProduct.totalPrice = curProduct.price * curProduct.amount
        }
      })
    } else {
      newProducts.push({...product, amount: 1, totalPrice: product.price })
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

  const deleteProduct = useCallback((productId: number) => {
    const newProducts = cartProducts.filter(product => product.id !== productId)
    setCartProducts(newProducts)
  }, [cartProducts])

  const handleCheckout = useCallback((totalPrice: number) => {
    const newTotalOrder = [...myOrders]

    const orderToAdd = {
      totalPrice,
      date: getDate(),
      products: cartProducts,
      totalProducts: cartProducts.length
    }

    newTotalOrder.push(orderToAdd)

    setMyOrders(newTotalOrder)
    setIsCheckoutSideMenuOpen(false)
    setCartProducts([])
    setCount(0)
  }, [myOrders, cartProducts])

  // Context
  const contextValue = useMemo(() => ({
    count,
    isProductDetailOpen,
    currentProductDetail,
    cartProducts,
    isCheckoutSideMenuOpen,
    currentProductId,
    myOrders,
    setCount,
    openProductDetail,
    closeProductDetail,
    addProducts,
    setIsCheckoutSideMenuOpen,
    deleteProduct,
    handleCheckout
  }),
  [
    count,
    isProductDetailOpen,
    currentProductDetail,
    cartProducts,
    isCheckoutSideMenuOpen,
    currentProductId,
    myOrders,
    setCount,
    addProducts,
    deleteProduct,
    handleCheckout
  ])

  return (
    <ShoppingContext.Provider value={ contextValue }>
      { children }
    </ShoppingContext.Provider>
  )
}

export { ShoppingContext, ShoppingProvider }
