import PlanetBG from '../../Components/PlanetBG/PlanetBG'
import './Rovers.css'

const Rovers = () => {
  return (
    <>
      <PlanetBG opacity={0.8} image={'mars'} rotate={true} />
      <div>Rovers</div>
    </>
  )
}

export default Rovers
