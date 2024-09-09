import { ProductsResponse } from '../../types'

export interface ProductType {
  product: ProductsResponse
  noAllowDeleteProducts?: boolean
}
