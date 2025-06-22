import { useEffect, useState } from 'react'
import { roverList } from '../../Utils/roversList'
import Loading from '../Loading/Loading'
import RoverTab from '../RoverTab/RoverTab'
import './GalleryTab.css'
import GalleryCard from '../GalleryCard/GalleryCARD.JSX'

const GalleryTab = () => {
  const [active, setActive] = useState('CURIOSITY')
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  //1 useEffect para la peticion
  useEffect(() => {
    setLoading(true)
    setPhotos([])
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${active.toLowerCase()}/photos?sol=1000&api_key=f1OcLdTJsj9cQDrS0tcbhnwLxSTlnrZJnlrqtS0H`
    )
      .then((res) => res.json())
      .then((res) => {
        setPhotos(res.photos)
        setLoading(false)
      })
  }, [active])

  return (
    <section id='gallery' className='animIn'>
      <div className='galleryTab flex'>
        {roverList.map((rover) => {
          return (
            <RoverTab
              name={rover.name}
              key={rover.id}
              isActive={active}
              onClick={() => setActive(rover.name)}
            ></RoverTab>
          )
        })}
      </div>
      <div className='gallery flex'>
        {loading && <Loading />}

        {photos.map((photo) => (
          <GalleryCard photo={photo} />
        ))}
      </div>
    </section>
  )
}

export default GalleryTab
