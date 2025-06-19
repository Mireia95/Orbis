import './Mars.css'

const Mars = ({ opacity }) => {
  return (
    <div className='marsBG'>
      <img
        style={{ opacity: opacity }}
        src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750142281/Marsexplorer/mars_planet_ayboy3.png'
        alt='mars planet'
      />
    </div>
  )
}

export default Mars
