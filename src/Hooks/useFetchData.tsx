import { useState, useEffect } from 'react'
import type { ProductsResponse } from '../types'

const PRODUCTS_API = import.meta.env.VITE_PRODUCTS_API

const useFetchData = () => {
  const getProductsUrl = `${PRODUCTS_API}/products`

  const [items, setItems] = useState<ProductsResponse[] | null>(null)
  const [errorFetch, setErrorFetch] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getProductsUrl)

        if (!response.ok) throw new Error(`Error: ${response.status}`)

        const data: ProductsResponse[] = await response.json()

        setItems(data)
      } catch (error) {
        setErrorFetch(error as Error)
        console.log(error)
      }
    }

    fetchData()
  }, [getProductsUrl])

  return {
    items,
    errorFetch
  }
}

export { useFetchData }
