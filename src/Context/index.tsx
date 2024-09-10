import { createContext, useState, useMemo, useCallback, useEffect, type MouseEvent } from 'react'

import { getDate } from '../utils'

import type { ChildrenType, CardContextType, ProductsResponse, OrderType } from '../types'

const defaulContext = {
  items: [],
  count: 0,
  isProductDetailOpen: false,
  isCheckoutSideMenuOpen: false,
  cartProducts: [],
  currentProductId: null,
  currentProductDetail: {},
  myOrders: [],
  searchProductsByTitle: null,
  filteredItems: [],
  setItems: () => {},
  setCount: () => {},
  openProductDetail: () => {},
  closeProductDetail: () => {},
  addProducts: () => {},
  setIsCheckoutSideMenuOpen: () => {},
  deleteProduct: () => {},
  handleCheckout: () => {},
  setSearchProductsByTitle: () => {}
}

const ShoppingContext = createContext<CardContextType>(defaulContext)

const ShoppingProvider = ({ children }: ChildrenType) => {
  // States
  const [items, setItems] = useState<ProductsResponse[]>([])
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [currentProductDetail, setCurrentProductDetail] = useState({})
  const [cartProducts, setCartProducts] = useState<ProductsResponse[]>([])
  const [myOrders, setMyOrders] = useState<OrderType[]>([])
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [currentProductId, setCurrentProductId] = useState<number | null>(null)
  const [searchProductsByTitle, setSearchProductsByTitle] = useState<string | null>(null)
  const [filteredItems, setFilteredItems] = useState<ProductsResponse[]>([])

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

  const filterItemsByTitle = useCallback((items: ProductsResponse[], searchProductsByTitle: string) => {
    return items.filter(item => item.title.toLocaleLowerCase().includes(searchProductsByTitle.toLocaleLowerCase()))
  }, [])

  useEffect(() => {
    if (searchProductsByTitle) setFilteredItems(filterItemsByTitle(items, searchProductsByTitle))
  }, [searchProductsByTitle, items, filterItemsByTitle])

  // Context
  const contextValue = useMemo(() => ({
    items,
    count,
    isProductDetailOpen,
    currentProductDetail,
    cartProducts,
    isCheckoutSideMenuOpen,
    currentProductId,
    myOrders,
    searchProductsByTitle,
    filteredItems,
    setItems,
    setCount,
    openProductDetail,
    closeProductDetail,
    addProducts,
    setIsCheckoutSideMenuOpen,
    deleteProduct,
    handleCheckout,
    setSearchProductsByTitle
  }),
  [
    items,
    count,
    isProductDetailOpen,
    currentProductDetail,
    cartProducts,
    isCheckoutSideMenuOpen,
    currentProductId,
    myOrders,
    searchProductsByTitle,
    filteredItems,
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
