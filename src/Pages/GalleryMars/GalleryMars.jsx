import { useEffect, useState } from 'react'
import './GalleryMars.css'
import RoverTab from '../../Components/RoverTab/RoverTab'
import { roverList } from '../../Utils/roversList'
import Loading from '../../Components/Loading/Loading'
import GalleryCard from '../../Components/GalleryCard/GalleryCard'

export const GalleryMars = () => {
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
    <section id='galleryMars' className='animIn'>
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
      <div className='galleryMars flex'>
        {loading && <Loading />}

        {photos.map((photo) => (
          <GalleryCard src={photo.img_src} alt={photo.id} key={photo.id} />
        ))}
      </div>
    </section>
  )
}
