import './GalleryCard.css'

const GalleryCard = ({ photo }) => {
  return (
    <div className='card' key={photo.id}>
      <img src={photo.img_src} alt={photo.id} s></img>
    </div>
  )
}

export default GalleryCard
