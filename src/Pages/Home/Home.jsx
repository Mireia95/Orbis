import { Link } from 'react-router-dom'
import CardInfoOrbis from '../../Components/CardInfoOrbis/CardInfoOrbis'
import './Home.css'
import PlanetBG from '../../Components/PlanetBG/PlanetBG'

const Home = () => {
  return (
    <>
      <PlanetBG opacity={1} image={'orbis'} />
      <div className='home flex'>
        <h1> ORBIS</h1>
        <Link to='/gallery' className='primButt'>
          {' '}
          Show gallery
        </Link>
      </div>
      <div className='infoMars flex'>
        <CardInfoOrbis
          icon='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750765546/Orbis/Diameter_eagrmz.png'
          title='Diameter galaxy'
          data='100,000 light-years'
        />
        <CardInfoOrbis
          icon='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750765546/Orbis/Shooting_Stars_fm1rrn.png'
          title='Stars per galaxy'
          data='up to 1 trillon'
        />
        <CardInfoOrbis
          icon='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750765546/Orbis/Galaxy_ixddeg.png'
          title='Known galaxies'
          data='over 2 trillion'
        />
      </div>
    </>
  )
}

export default Home
