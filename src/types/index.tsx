import { ReactNode } from 'react'

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
  setCount: (number: number) => void
  increaseCount: () => void
}
