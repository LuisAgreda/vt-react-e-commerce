import { useFetchData } from '../../Hooks/useFetchData'

import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProducDetail'

import type { ProductsResponse } from '../../types'

function Home() {
  const { items } = useFetchData()

  return (
    <Layout>
      Home
      <ProductDetail />
      <div className='w-full px-4 gap-4 grid justify-items-center grid-cols-[repeat(auto-fit,_minmax(224px,_1fr))]'>
        {
          (items as ProductsResponse[])?.map(item => (
            <Card
              key={ item.id }
              data={ item } />
          ))
        }
      </div>
    </Layout>
  )
}

export { Home }
