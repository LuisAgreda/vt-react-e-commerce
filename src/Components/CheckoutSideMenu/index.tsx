import { OrderCard } from '../OrderCard'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { ShoppingContext } from '../../Context'
import { useContext } from 'react'

import { ProductsResponse } from '../../types'

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen, cartProducts } = useContext(ShoppingContext)

  if (isCheckoutSideMenuOpen) {
    return (
      <aside className="w-[22.5rem] h-[calc(100%-3.75rem)] bg-white flex flex-col border border-black rounded-lg overflow-x-auto fixed right-0 bottom-0 z-10">
        <div className="p-6 bg-white/85 backdrop-blur flex justify-between items-center sticky top-0">
          <h2 className="font-medium text-xl">
            Cart
          </h2>

          <button
            type="button"
            onClick={ () => setIsCheckoutSideMenuOpen(false) }>
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="px-6 grid gap-6">
          {
            cartProducts.map((product: ProductsResponse) => (
              <OrderCard
                key={ product.id }
                product={ product } />
            ))
          }
        </div>
      </aside>
    )
  }
}

export { CheckoutSideMenu }
