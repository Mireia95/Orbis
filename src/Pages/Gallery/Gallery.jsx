import { useEffect, useState } from 'react';
import './Gallery.css';
import RoverTab from '../../Components/RoverTab/RoverTab';
import GalleryTab from '../../Components/GalleryTab/GalleryTab';

const Gallery = () => {
  //1 estado para todas las imagenes
  const [images, setImages] = useState([]);

  //1 useEffect para la peticion
  useEffect(() => {
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=f1OcLdTJsj9cQDrS0tcbhnwLxSTlnrZJnlrqtS0H'
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return <GalleryTab></GalleryTab>;
};

export default Gallery;
