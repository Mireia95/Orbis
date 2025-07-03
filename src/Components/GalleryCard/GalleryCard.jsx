import ButtonLink from '../ButtonLink/ButtonLink'
import './GalleryCard.css'

const GalleryCard = ({ src, alt, id, path }) => {
  return (
    <>
      <div className='card' key={id}>
        <div className='detailsHover flex'>
          <ButtonLink
            text='View details'
            img='https://res.cloudinary.com/dr2vohk2z/image/upload/v1751316778/Orbis/SearchIconv002_xyunkm.png'
            alt='details'
            path={path}
            className='hoverLink flex'
          ></ButtonLink>
        </div>
        <img src={src} alt={alt}></img>
      </div>
    </>
  )
}

export default GalleryCard
