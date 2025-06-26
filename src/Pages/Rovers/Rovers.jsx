import PlanetBG from '../../Components/PlanetBG/PlanetBG'
import './Rovers.css'

const Rovers = () => {
  return (
    <>
      <PlanetBG opacity={0.8} image={'mars'} rotate={true} />
      <section id='rovers'>
        <p>
          {' '}
          Since 1997, NASA has sent several rovers to Mars to study its surface.
          Here are the main characters of this incredible scientific mission{' '}
        </p>
        <div>
          <div className='rover'>
            <article>
              <img src='' alt='' />
              <h4> Curiosity name </h4>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Rovers
