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
}

export interface ChildrenType {
  children: ReactNode
}

export interface CardContextType {
  count: number
  isProductDetailOpen: boolean
  currentProductDetail: ProductsResponse | Record<string, string>
  cartProducts: ProductsResponse[]
  isCheckoutSideMenuOpen: boolean
  currentProductId: number | null
  setCount: (number: number) => void
  openProductDetail: (currentProduct: ProductsResponse) => void
  closeProductDetail: () => void
  addProducts: (event: MouseEvent, product: ProductsResponse) => void
  setIsCheckoutSideMenuOpen: (value: boolean) => void
}
