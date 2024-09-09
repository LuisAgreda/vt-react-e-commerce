import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShoppingContext } from '../../Context'

import { Layout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'

const MyOrders = () => {
  const { myOrders } = useContext(ShoppingContext)

  return (
    <Layout>
      My Orders

      {
        myOrders.map((order, index) => (
          <Link
            key={ index }
            to={`/my-orders/${index}`}>
            <OrdersCard order={ order } />
          </Link>
        ))
      }
    </Layout>
  )
}

export { MyOrders }
