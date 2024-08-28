import { useState, useEffect } from 'react'
import type { ProductsResponse } from '../types'

const useFetchData = () => {
  const PRODUCTS_API = import.meta.env.VITE_PRODUCTS_API

  const [items, setItems] = useState<ProductsResponse[] | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(PRODUCTS_API)

        if (!response.ok) throw new Error(`Error: ${response.status}`)

        const data: ProductsResponse[] = await response.json()

        setItems(data)
      } catch (error) {
        setError(error as Error)
      }
    }

    fetchData()
  }, [PRODUCTS_API])

  return {
    items,
    error
  }
}

export { useFetchData }
