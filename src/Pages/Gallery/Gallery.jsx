import { useEffect, useState } from 'react'
import './Gallery.css'
import '../../Components/Styles/AnimIn.css'
import GalleryTab from '../../Components/GalleryTab/GalleryTab'
import Loading from '../../Components/Loading/Loading'

const Gallery = () => {
  //1 estado para todas las imagenes
  const [images, setImages] = useState([])

  //1 useEffect para la peticion
  useEffect(() => {
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=f1OcLdTJsj9cQDrS0tcbhnwLxSTlnrZJnlrqtS0H'
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
  }, [])

  return (
    <>
      <section id='gallery' className='animIn'>
        <GalleryTab />
        <div className='gallery'>
          <Loading></Loading>
        </div>
      </section>
    </>
  )
}

export default Gallery
