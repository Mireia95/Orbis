import { useLocation } from 'react-router-dom'
import './Meteors.css'
import { Meteors } from '@/components/magicui/meteors'
const MeteorsBG = () => {
  const location = useLocation()
  const home = location.pathname === '/'
  return (
    <>
      {home && (
        <div className='meteors'>
          <Meteors />
        </div>
      )}
    </>
  )
}

export default MeteorsBG
