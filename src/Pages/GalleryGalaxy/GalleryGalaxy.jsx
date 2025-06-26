import { useEffect, useState } from 'react'
import GalleryCard from '../../Components/GalleryCard/GalleryCard'
import './GalleryGalaxy.css'
import Loading from '../../Components/Loading/Loading'

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
      <h3>GALAXIES PHOTOS</h3>
      <div className='galaxies-photos'>
        {loading && <Loading />}

        {photos.map((photo) => {
          console.log(photo)
          return null // o algún componente si quieres renderizar algo
        })}
      </div>
    </>
  )
}
