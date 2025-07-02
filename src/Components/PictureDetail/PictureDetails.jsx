import { useEffect, useState } from 'react'
import './PictureDetails.css'
import { useParams } from 'react-router-dom'

const PictureDetails = () => {
  const [picture, setPicture] = useState()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://images-api.nasa.gov/search?nasa_id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setPicture(res.collection.items[0])
      })
  }, [])

  return (
    <section id='pictureDetail' className='flex'>
      {picture && (
        <>
          <h3> {picture.data[0].title} </h3>
          <p>{picture.data[0].description_508} </p>
          <p className='date'>{picture.data[0].date_created.slice(0, 10)}</p>
          <div className='imgDetail'>
            <img src={picture.links[2].href} alt='test'></img>
          </div>
        </>
      )}
    </section>
  )
}

export default PictureDetails
