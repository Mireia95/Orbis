import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = ({ text = true }) => {
  return (
    <div className='logo flex'>
      <Link className='flex' to='/'>
        <img
          src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1751101686/Orbis/orbisLogo.png'
          alt='Orbis logo'
        />
        {text ? 'Orbis' : null}
      </Link>
    </div>
  )
}

export default Logo
