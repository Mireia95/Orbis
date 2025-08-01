import CardInfoOrbis from '../../Components/CardInfoOrbis/CardInfoOrbis'
import './Home.css'
import '../../Components/Styles/AnimInH1.css'
import '../../Components/Styles/AnimIn.css'
import PlanetBG from '../../Components/PlanetBG/PlanetBG'
import ButtonLink from '../../Components/ButtonLink/ButtonLink'
import { Meteors } from '@/Components/magicui/meteors'
import { ShinyButton } from '@/Components/magicui/shiny-button'

const Home = () => {
  return (
    <>
      <div className='home flex animInTitle'>
        <h1> ORBIS</h1>
        <ShinyButton className='primButtShiny'>
          <ButtonLink
            text='Show gallery'
            path='/gallery-galaxy'
            primButt={true}
          ></ButtonLink>
        </ShinyButton>
      </div>
      <div className='infoGalaxy flex'>
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
