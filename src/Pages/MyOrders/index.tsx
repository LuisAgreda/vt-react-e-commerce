import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShoppingContext } from '../../Context'

import { Layout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'

const MyOrders = () => {
  const { myOrders } = useContext(ShoppingContext)

  return (
    <Layout>
      <h1 className="font-medium text-lg mb-6">
        My Orders
      </h1>

      <div className="w-full grid auto-cols-fr gap-2">
        {
          myOrders.map((order, index) => (
            <Link
              key={ index }
              to={`/my-orders/${index}`}
              className="w-full max-w-80 place-self-center">
              <OrdersCard order={ order } />
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export { MyOrders }
