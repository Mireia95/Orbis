import RoverTab from '../RoverTab/RoverTab'
import './GalleryTab.css'

const GalleryTab = () => {
  return (
    <div className='galleryTab flex'>
      <RoverTab name='SPIRIT'></RoverTab>
      <RoverTab name='CURIOSITY' isActive={true}></RoverTab>
      <RoverTab name='OPPORTUNITY'></RoverTab>
    </div>
  )
}

export default GalleryTab
