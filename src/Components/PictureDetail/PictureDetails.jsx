import './PictureDetails.css';

const PictureDetails = ({ title, description, date, img }) => {
  console.log('details');
  return (
    <section id='pictureDetail'>
      <h3> {title}</h3>
      <p> {description}</p>
      <p className='date'>{date}</p>
      <div>
        <img src={img} alt={title}></img>
      </div>
    </section>
  );
};

export default PictureDetails;
