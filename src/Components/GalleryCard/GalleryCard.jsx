import './GalleryCard.css'

const GalleryCard = ({ src, alt, key }) => {
  return (
    <div className='card' key={key}>
      <img src={src} alt={alt}></img>
    </div>
  )
}

export default GalleryCard
