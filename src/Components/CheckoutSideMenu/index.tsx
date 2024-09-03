import { ShoppingContext } from '../../Context'
import { useContext } from 'react'

import { XMarkIcon } from '@heroicons/react/24/solid'
// import { ProductsResponse } from '../../types'

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen } = useContext(ShoppingContext)

  if (isCheckoutSideMenuOpen) {
    return (
      <aside className="w-[22.5rem] h-[calc(100%-3.75rem)] bg-white flex flex-col border border-black rounded-lg fixed right-0 bottom-0 z-10">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">
            Cart
          </h2>

          <button
            type="button"
            onClick={ () => setIsCheckoutSideMenuOpen(false) }>
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>
        </div>
      </aside>
    )
  }
}

export { CheckoutSideMenu }
