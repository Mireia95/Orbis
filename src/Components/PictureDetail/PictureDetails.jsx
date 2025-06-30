import { useEffect, useState } from 'react';
import './PictureDetails.css';
import { useParams } from 'react-router-dom';

const PictureDetails = () => {
  const [picture, setPicture] = useState('');
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://images-api.nasa.gov/asset/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPicture(res);
      });
  }, []);

  return (
    <section id='pictureDetail'>
      <h3> PRUEBA </h3>
      <p> </p>
      <p className='date'></p>
      <div>
        <img></img>
      </div>
    </section>
  );
};

export default PictureDetails;
