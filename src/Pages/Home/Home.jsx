import Button from '../../Components/Button/Button'
import CardInfoMars from '../../Components/CardInfoMars/CardInfoMars'
import Mars from '../../Components/Mars/Mars'
import './Home.css'

const Home = () => {
  return (
    <>
      <Mars />
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
          data=''
        />
        <CardInfoMars
          icon='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750144892/Marsexplorer/gravedad_sm1thj.png'
          title='Gravity'
          data=''
        />
        <CardInfoMars
          icon='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750144892/Marsexplorer/temperatura_no502t.png'
          title='Degrees'
          data=''
        />
      </div>
    </>
  )
}

export default Home
