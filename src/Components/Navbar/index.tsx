import { useContext } from "react"
import { NavLink } from "react-router-dom"

import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import { ShoppingContext } from "../../Context"

const navListLeft = [
  { to: '/', name: 'All' },
  { to: '/clothes', name: 'Clothes' },
  { to: '/electronics', name: 'Electronics' },
  { to: '/fornitures', name: 'Fornitures' },
  { to: '/toys', name: 'Toys' },
  { to: '/others', name: 'Others' },
]

const navListRight = [
  { to: '/my-orders', name: 'My Orders' },
  { to: '/my-account', name: 'My Accaunt' },
  { to: '/sign-in', name: 'Sing In' },
]

const linkStyles = ({ isActive }: Record<string, boolean>) => {
  const activeStyle = 'underline underline-offset-4'

  return isActive
  ? activeStyle
  : 'hover:underline underline-offset-4'
}

const Navbar = () => {
  const { count, setSearchProductsByCategory, setIsCheckoutSideMenuOpen } = useContext(ShoppingContext)

  return (
    <nav className="px-8 py-4 bg-white/85 backdrop-blur flex justify-between items-center sticky top-0 z-10">
      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to="/"
            className="font-semibold text-lg"
            onClick={ () => setSearchProductsByCategory('') }>
            RK Shop
          </NavLink>
        </li>

        {
          navListLeft.map(({ to, name }) => (
            <li key={ name }>
              <NavLink
                to={to}
                className={ linkStyles }
                onClick={ () => setSearchProductsByCategory(name.toLowerCase()) }>
                { name }
              </NavLink>
            </li>
          ))
        }
      </ul>

      <ul className="hidden lg:flex items-center gap-3">
        <li className="text-black/60">
          felipe.agreda@gmail.com
        </li>

        {
          navListRight.map(({ to, name }) => (
            <li key={ name }>
              <NavLink
                to={ to }
                className={ linkStyles }>
                { name }
              </NavLink>
            </li>
          ))
        }

        <li>
          <button
            className="flex items-center gap-1"
            onClick={ () => setIsCheckoutSideMenuOpen(true) }>
            <ShoppingBagIcon className="w-5 h-5 text-black" />

            { count }
          </button>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
