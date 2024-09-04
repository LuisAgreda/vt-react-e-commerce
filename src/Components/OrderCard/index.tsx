import { TrashIcon } from '@heroicons/react/24/outline'

import { ProductType } from './types'

const OrderCard = ({ product }: ProductType) => {
  const { id, title, price, amount } = product

  return (
    <div className="pr-6 flex items-center gap-2 relative">
      <button
        className="p-1 rounded-full absolute top-0 right-0 hover:bg-red-200 duration-200"
        type="button">
        <TrashIcon className="w-5 h-5 text-black" />
      </button>

      <figure className="w-24 h-24 flex-shrink-0">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={ `https://picsum.photos/id/${id}/800` }
          alt={ title } />
      </figure>

      <div className="h-full grid">
        <p className="text-sm">
          { title }
        </p>

        <p className="text-sm font-medium">
          Cantidad: { amount }
        </p>

        <p className="text-lg font-medium self-end">
          $ { price }
        </p>
      </div>
    </div>
  )
}

export { OrderCard }
