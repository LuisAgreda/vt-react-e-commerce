import { ChevronRightIcon, CalendarIcon } from "@heroicons/react/24/solid"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

import type { OrdersCardType } from "./types"

const OrdersCard = ({ order }: OrdersCardType) => {
  const { date, totalPrice, totalProducts } = order

  return (
    <div className="p-4 flex items-center justify-between gap-2 relative border border-black rounded-lg">
      <div className="grid">
        <span className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-black" />
          { date }
        </span>

        <span className="flex items-center gap-2">
          <ShoppingBagIcon className="w-5 h-5 text-black" />
          { totalProducts } articles
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-medium text-2xl">
          $ { totalPrice }
        </span>

        <ChevronRightIcon className="w-6 h-6 text-black" />
      </div>
    </div>
  )
}

export { OrdersCard }
