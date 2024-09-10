import { useContext } from 'react'
import { ShoppingContext } from '../../Context'

import { useGetProducts } from '../../Hooks/useFetchData'

import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProducDetail'

function Home() {
  useGetProducts()

  const { items, filteredItems, filteredItemsByCategory, searchProductsByTitle, searchProductsByCategory, setSearchProductsByTitle } = useContext(ShoppingContext)

  const resolveItemsRender = () => {
    if (!searchProductsByCategory || searchProductsByCategory === 'all') {
      return searchProductsByTitle?.length
        ? filteredItems
        : items
    } else {
      return searchProductsByTitle?.length
        ? filteredItems
        : filteredItemsByCategory
    }
  }

  return (
    <Layout>
      <h1 className="font-medium text-lg mb-6">
        Exclusive Products
      </h1>

      <input
        type="text"
        placeholder="Search products"
        className="w-80 mb-6 p-4 rounded-lg border border-black focus:outline-black"
        onChange={(event) => setSearchProductsByTitle(event.target.value)} />

      <div className='w-[224px] sm:w-[464px] md:w-[704px] lg:w-[944px] flex flex-wrap gap-4'>
        {
          resolveItemsRender()?.length
          ? resolveItemsRender()?.map(item => (
            <Card
            key={ item.id }
            data={ item } />
          ))

          : <p>Products not found</p>
        }
      </div>

      <ProductDetail />
    </Layout>
  )
}

export { Home }
