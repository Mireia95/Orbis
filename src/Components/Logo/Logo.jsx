import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
  return (
    <div className='logo'>
      <Link className='flex' to='/'>
        <img
          src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1751101686/Orbis/mars-rover-logo_m20kmq.png'
          alt='Orbis logo'
        />
        Orbis
      </Link>
    </div>
  )
}

export default Logo
