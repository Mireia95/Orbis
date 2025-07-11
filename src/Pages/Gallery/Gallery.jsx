import './Gallery.css'
import '../../Components/Styles/AnimIn.css'
import PlanetBG from '../../Components/PlanetBG/PlanetBG'
import ButtonLink from '../../Components/ButtonLink/ButtonLink'

const Gallery = () => {
  return (
    <>
      {/*   <PlanetBG opacity={0.4} /> */}
      <div className='galleryChoose flex animInCenter'>
        <p>Discover the universe through NASA's lens</p>
        <ButtonLink text='GALAXY PHOTOS' path='/gallery-galaxy'></ButtonLink>
        <ButtonLink text='NEBULA PHOTOS' path='/gallery-nebula'></ButtonLink>
      </div>
    </>
  )
}

export default Gallery
