import { useEffect, useState } from 'react';
import './PictureDetails.css';
import { useLocation, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ButtonBack from '../ButtonBack/ButtonBack';

const PictureDetails = () => {
  const [picture, setPicture] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  //recover the path from where we came
  const location = useLocation();
  const from = location.state?.from ? location.state.from : '/gallery';

  useEffect(() => {
    setLoading(true);
    fetch(`https://images-api.nasa.gov/search?nasa_id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPicture(res.collection.items[0]);
        setLoading(false);
      });
  }, []);

  return (
    <section id='pictureDetail' className='flex'>
      {loading && <Loading />}
      {picture && (
        <>
          <div className='flex'>
            <h3> {picture.data[0].title} </h3>
            <ButtonBack path={from} />
          </div>
          <p>{picture.data[0].description_508} </p>
          <p className='date'>{picture.data[0].date_created.slice(0, 10)}</p>
          <div className='imgDetail'>
            {console.log(picture.links[1].href)}
            <img
              src={picture.links[2]?.href || picture.links[1]?.href}
              alt='test'
            ></img>
          </div>
        </>
      )}
    </section>
  );
};

export default PictureDetails;
