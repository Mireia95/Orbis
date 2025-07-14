import './GalleryPicture.css';

import { useEffect, useState } from 'react';
import GalleryCard from '../../Components/GalleryCard/GalleryCard';
import Loading from '../../Components/Loading/Loading';
import ButtonBack from '../../Components/ButtonBack/ButtonBack';

const GalleryPicture = ({ title, search }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setPhotos([]);
    fetch(`https://images-api.nasa.gov/search?q=${search}`)
      .then((res) => res.json())
      .then((res) => {
        setPhotos(res.collection.items);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className='divTitle fadeIn flex'>
        <ButtonBack path={'/gallery'} />
        <h3>{title}</h3>
      </div>
      <div className='flex fadeIn galaxies-photos'>
        {loading && <Loading />}
        {photos.map((photo, index) => {
          return (
            <GalleryCard
              src={photo.links[1].href}
              alt='galaxy image'
              id={photo.data[0].nasa_id}
              path={`/picture/${photo.data[0].nasa_id}`}
              from={`/gallery-${search}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default GalleryPicture;
