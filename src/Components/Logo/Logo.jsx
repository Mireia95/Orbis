import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
  return (
    <div className='logo'>
      <Link className='flex' to='/'>
        <img
          src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750140631/Marsexplorer/mars-rover-logo_iswwa9.png'
          alt='Marsexplorer logo'
        />
        Marsexplorer
      </Link>
    </div>
  )
}

export default Logo
