import './CardInfoOrbis.css';

const CardInfoOrbis = ({ icon, title, data }) => {
  return (
    <article className='cardInfoOrbis flex'>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{data}</p>
    </article>
  );
};

export default CardInfoOrbis;
