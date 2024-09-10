import { useState, useEffect, useContext } from 'react'
import { ShoppingContext } from '../Context'
import type { ProductsResponse } from '../types'

const PRODUCTS_API = import.meta.env.VITE_PRODUCTS_API

const useGetProducts = () => {
  const { setItems } = useContext(ShoppingContext)
  const getProductsUrl = `${PRODUCTS_API}/products`

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
  }, [getProductsUrl, setItems])

  return {
    errorFetch
  }
}

export { useGetProducts }
