import Button from '../../Components/Button/Button'
import CardInfoMars from '../../Components/CardInfoMars/CardInfoMars'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='home flex'>
        <h1> MARS</h1>
        <Button
          text='Show gallery'
          pathNav='/gallery'
          className='primButt'
        ></Button>
      </div>
      <div className='infoMars flex'>
        <CardInfoMars
          icon='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750144892/Marsexplorer/diametro_s8ikac.png'
          title='Diameter'
          data='6.779 km'
        />
        <CardInfoMars
          icon='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750144892/Marsexplorer/gravedad_sm1thj.png'
          title='Gravity'
          data='3,73 m/s²'
        />
        <CardInfoMars
          icon='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750144892/Marsexplorer/temperatura_no502t.png'
          title='Degrees'
          data='-63°C'
        />
      </div>
    </>
  )
}

export default Home
