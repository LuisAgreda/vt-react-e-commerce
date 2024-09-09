import { useContext } from 'react'

import { Layout } from '../../Components/Layout'
import { OrderCard } from '../../Components/OrderCard'

import { ShoppingContext } from '../../Context'

function MyOrder() {
  const { myOrders } = useContext(ShoppingContext)

  return (
    <Layout>
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
