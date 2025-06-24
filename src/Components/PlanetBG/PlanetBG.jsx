import './PlanetBG.css'

const PlanetBG = ({ opacity, image, rotate = false }) => {
  const images = {
    orbis:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1750681673/Orbis/ORBISBG_wokwmt.png',
    mars: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1750681672/Orbis/MARSBG_a4lz1p.png'
  }
  console.log(image)

  return (
    <div className={'planetBG'}>
      <img
        className={rotate ? 'rotate' : ''}
        style={{
          opacity: opacity
        }}
        src={images[image]}
        alt={`${image} planet`}
      />
    </div>
  )
}

export default PlanetBG
