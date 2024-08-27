const Card = () => (
  <div className="w-56 h-60 bg-white rounded-lg cursor-pointer">
    <figure className="w-full h-4/5 mb-2 relative">
      <img
        src="https://picsum.photos/200/200"
        alt="headphones"
        className="w-full h-full object-cover rounded-lg" />

      <span className="px-3 py-0.5 m-2 text-black text-xs bg-white/60 rounded-lg absolute bottom-0 left-0">
        Electronics
      </span>

      <div className="w-6 h-6 p-1 m-2 bg-white rounded-full border grid place-content-center absolute top-0 right-0">
        +
      </div>
    </figure>

    <p className="flex justify-between items-center">
      <span className="text-sm">
        HeadPhones
      </span>

      <span className="text-lg font-medium">
        $300
      </span>
    </p>
  </div>
)

export { Card }
