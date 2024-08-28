import { useContext } from 'react'
import { ShoppingContext } from '../../Context'

import type { Data } from "./types"

const Card = ({ data }: Data) => {
  const { increaseCount } = useContext(ShoppingContext)

  const {
    id,
    title,
    price,
    category: { name: categoryName }
  } = data

  return (
    <div className="w-56 h-60 bg-white rounded-lg cursor-pointer">
      <figure className="w-full h-4/5 mb-2 relative">
        <img
          src={`https://picsum.photos/id/${id}/800`}
          alt={ categoryName }
          className="w-full h-full object-cover rounded-lg" />

        <span className="px-3 py-0.5 m-2 text-black text-xs bg-white/60 rounded-lg absolute bottom-0 left-0">
          { categoryName }
        </span>

        <button
          type="button"
          className="w-6 h-6 p-1 m-2 bg-white rounded-full border grid place-content-center absolute top-0 right-0"
          onClick={ increaseCount }>
          +
        </button>
      </figure>

      <p className="flex justify-between items-center gap-2">
        <span className="text-sm">
          { title }
        </span>

        <span className="text-lg font-medium">
          ${ price }
        </span>
      </p>
    </div>
  )
}

export { Card }
