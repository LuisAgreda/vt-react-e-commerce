import { NavLink } from "react-router-dom"

const navListLeft = [
  { to: '/', name: 'All' },
  { to: '/Clothes', name: 'Clothes' },
  { to: '/Electronics', name: 'Electronics' },
  { to: '/Fornitures', name: 'Fornitures' },
  { to: '/Toys', name: 'Toys' },
  { to: '/Others', name: 'Others' },
]

const navListRight = [
  { to: '/my-orders', name: 'My Orders' },
  { to: '/my-account', name: 'My Accaunt' },
  { to: '/sign-in', name: 'Sing In' },
]

const linkStyles = ({ isActive }: Record<string, boolean>) => {
  const activeStyle = 'underline underline-offset-4'

  if (isActive) return activeStyle
}

const Navbar = () => (
  <nav className="px-8 py-4 bg-white/85 backdrop-blur flex justify-between items-center sticky top-0 z-10">
    <ul className="flex items-center gap-3">
      <li>
        <NavLink
          to="/"
          className="font-semibold text-lg">
          RK Shop
        </NavLink>
      </li>

      {
        navListLeft.map(({ to, name }) => (
          <li key={ name }>
            <NavLink
              to={to}
              className={linkStyles}>
              { name }
            </NavLink>
          </li>
        ))
      }
    </ul>

    <ul className="flex items-center gap-3">
      <li className="text-black/60">
        agreda.feli@gmail.com
      </li>

      {
        navListRight.map(({ to, name }) => (
          <li key={ name }>
            <NavLink
              to={ to }
              className={linkStyles}>
              { name }
            </NavLink>
          </li>
        ))
      }

      <li>
        🛒 0
      </li>
    </ul>
  </nav>
)

export { Navbar }
