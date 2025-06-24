import './Gallery.css'
import '../../Components/Styles/AnimIn.css'
import { Link } from 'react-router-dom'
import PlanetBG from '../../Components/PlanetBG/PlanetBG'

const Gallery = () => {
  return (
    <>
      <PlanetBG opacity={0.8} image={'orbis'} rotate={true} />
      <p>Discover the universe through NASA's lens</p>
      <Link to='/gallery/galaxy' className=''>
        GALLERY PHOTOS
      </Link>
      <Link to='/gallery/mars' className=''>
        MARS PHOTOS
      </Link>
    </>
  )
}

export default Gallery
