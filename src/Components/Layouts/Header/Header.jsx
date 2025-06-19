import { NavLink } from 'react-router-dom'
import Logo from '../../Logo/Logo'
import './Header.css'

const Header = () => {
  return (
    <header className='flex'>
      <Logo />
      <nav>
        <ul className='flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/rovers'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Rovers
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/gallery'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
