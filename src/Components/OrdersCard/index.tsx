import { OrdersCardType } from "./types"

const OrdersCard = ({ order }: OrdersCardType) => {
  const { date, totalPrice, totalProducts } = order

  return (
    <div className="pr-6 flex items-center gap-2 relative border">
      <p className="grid">
        <span>
          { date }
        </span>

        <span>
          { totalProducts }
        </span>

        <span>
          $ { totalPrice }
        </span>
      </p>
    </div>
  )
}

export { OrdersCard }
