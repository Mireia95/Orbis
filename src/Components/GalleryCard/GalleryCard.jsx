import ButtonLink from '../ButtonLink/ButtonLink'
import './GalleryCard.css'

const GalleryCard = ({ src, alt, key, path }) => {
  return (
    <>
      <div className='card' key={key}>
        <img src={src} alt={alt}></img>
      </div>
      <div className='details flex'>
        <ButtonLink
          text='View details'
          img=''
          alt='details'
          className='detailsHover'
          path={path}
        ></ButtonLink>
      </div>
    </>
  )
}

export default GalleryCard
