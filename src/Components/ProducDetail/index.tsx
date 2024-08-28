import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
  return (
    <aside className="w-[22.5rem] h-[calc(100%-3.75rem)] bg-white flex flex-col border border-black rounded-lg fixed right-0 bottom-0">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">
          detail
        </h2>
        <div>
          <XMarkIcon className='w-6 h-6 text-black' />
        </div>
      </div>
    </aside>
  )
}

export { ProductDetail }
