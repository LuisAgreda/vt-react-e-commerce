import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Layout } from '../../Components/Layout'
import { OrderCard } from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

import { ShoppingContext } from '../../Context'

function MyOrder() {
  const { myOrders } = useContext(ShoppingContext)

  return (
    <Layout>
      <div className="w-80 flex items-center justify-center relative">
        <Link
          to="/my-orders"
          className="absolute left-0">
            <ChevronLeftIcon className="w-6 h-6 text-black" />
        </Link>

        <span>
          My Order
        </span>
      </div>

      <div className="flex flex-col flex-1 gap-4">
        {
          myOrders?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={ `${product.title}-${product.id}` }
              product={ product }
              noAllowDeleteProducts />
          ))
        }
      </div>
    </Layout>
  )
}

export { MyOrder }
