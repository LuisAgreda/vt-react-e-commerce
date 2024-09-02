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
}

export interface ChildrenType {
  children: ReactNode
}

export interface CardContextType {
  count: number
  isProductDetailOpen: boolean
  currentProductDetail: ProductsResponse | unknown
  cartProducts: ProductsResponse[]
  setCount: (number: number) => void
  openProductDetail: (currentProduct: ProductsResponse) => void
  closeProductDetail: () => void
  addProducts: (event: MouseEvent, product: ProductsResponse) => void
}
