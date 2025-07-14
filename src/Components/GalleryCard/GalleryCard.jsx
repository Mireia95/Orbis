import ButtonLink from '../ButtonLink/ButtonLink';
import './GalleryCard.css';

const GalleryCard = ({ src, alt, id, path, from }) => {
  return (
    <>
      <div className='card' key={id}>
        <div className='detailsHover flex'>
          <ButtonLink
            text='View details'
            img='https://res.cloudinary.com/dr2vohk2z/image/upload/v1752491566/Orbis/search_sawdnp.png'
            alt='details'
            path={path}
            className='hoverLink flex'
            state={{ from }}
          ></ButtonLink>
        </div>
        <img src={src} alt={alt}></img>
      </div>
    </>
  );
};

export default GalleryCard;
