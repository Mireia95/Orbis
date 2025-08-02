import { useLocation } from 'react-router-dom'
import './Particles.css'

import { Particles } from '../magicui/particles'

const ParticlesBG = () => {
  const location = useLocation()
  const home = location.pathname === '/'
  return (
    <>
      {home && (
        <div className='particles'>
          <Particles />
        </div>
      )}
    </>
  )
}

export default ParticlesBG
