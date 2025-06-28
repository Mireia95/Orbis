import { useEffect, useState } from 'react'
import GalleryCard from '../../Components/GalleryCard/GalleryCard'
import './GalleryGalaxy.css'
import Loading from '../../Components/Loading/Loading'
import ButtonBack from '../../Components/ButtonBack/ButtonBack'

export const GalleryGalaxy = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setPhotos([])
    fetch(`https://images-api.nasa.gov/search?q=galaxy`)
      .then((res) => res.json())
      .then((res) => {
        setPhotos(res.collection.items)
        setLoading(false)
      })
  }, [])
  return (
    <>
      <div className='divTitle fadeIn flex'>
        <ButtonBack path={'/gallery'} />
        <h3>GALAXIES PHOTOS</h3>
      </div>
      <div className='flex fadeIn galaxies-photos'>
        {loading && <Loading />}
        {photos.map((photo, index) => {
          console.log(index)
          console.log(photo.links[1].href)
          return (
            <GalleryCard
              src={photo.links[1].href}
              alt='galaxy image'
              key={index}
            />
          )
        })}
      </div>
    </>
  )
}
