import Button from '../../Components/Button/Button'
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
    </>
  )
}

export default Home
