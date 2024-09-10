import { ReactNode, type MouseEvent } from 'react'

interface Category {
  id: number
  name: string
  image: string
}

export interface ProductsResponse {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
  amount?: number
  totalPrice?: number
}

export interface OrderType {
  date: string,
  totalPrice: number
  products: ProductsResponse[],
  totalProducts: number
}

export interface ChildrenType {
  children: ReactNode
}

export interface CardContextType {
  items: ProductsResponse[]
  count: number
  isProductDetailOpen: boolean
  currentProductDetail: ProductsResponse | Record<string, string>
  cartProducts: ProductsResponse[]
  isCheckoutSideMenuOpen: boolean
  currentProductId: number | null
  myOrders: OrderType[]
  searchProductsByTitle: string | null
  filteredItems: ProductsResponse[]
  setItems: (data: ProductsResponse[]) => void
  setCount: (number: number) => void
  openProductDetail: (currentProduct: ProductsResponse) => void
  closeProductDetail: () => void
  addProducts: (event: MouseEvent, product: ProductsResponse) => void
  setIsCheckoutSideMenuOpen: (value: boolean) => void
  deleteProduct: (productId: number) => void
  handleCheckout: (totalPrice: number) => void
  setSearchProductsByTitle: (value: string) => void
}
