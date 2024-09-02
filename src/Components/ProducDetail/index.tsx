import { ShoppingContext } from '../../Context'
import { useContext } from 'react'

import { XMarkIcon } from '@heroicons/react/24/solid'
import { ProductsResponse } from '../../types'

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, currentProductDetail } = useContext(ShoppingContext)

  const {
    id,
    title,
    price,
    description
  } = currentProductDetail as ProductsResponse

  if (isProductDetailOpen) {
    return (
      <aside className="w-[22.5rem] h-[calc(100%-3.75rem)] bg-white flex flex-col border border-black rounded-lg fixed right-0 bottom-0 z-10">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">
            Detail
          </h2>

          <button
            type="button"
            onClick={ closeProductDetail }>
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>
        </div>

        <figure className="px-6">
          <img
            className="w-full h-full rounded-lg"
            src={ `https://picsum.photos/id/${id}/800` }
            alt={ title } />
        </figure>

        <p className="flex flex-col p-6">
          <span className="mb-2 text-2xl font-medium">
            ${ price }
          </span>

          <span className="text-base font-medium">
            { title }
          </span>

          <span className="text-sm">
            { description }
          </span>
        </p>
      </aside>
    )
  }
}

export { ProductDetail }
