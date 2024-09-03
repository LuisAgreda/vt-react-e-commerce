import { XMarkIcon } from '@heroicons/react/24/solid'

import { ProductType } from './types'

const OrderCard = ({ product }: ProductType) => {
  const { id, title, price } = product

  return (
    <div className="flex justify-between items-start gap-3">
      <div className="flex items-start gap-2">
        <figure className="w-20 h-20 flex-shrink-0">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={ `https://picsum.photos/id/${id}/800` }
            alt={ title } />
        </figure>

        <p className="text-sm">
          { title }
        </p>
      </div>

      <div className="flex items-center gap-2 whitespace-nowrap">
        <p className="text-lg font-medium">
          $ { price }
        </p>

        <button type="button">
          <XMarkIcon className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  )
}

export { OrderCard }
