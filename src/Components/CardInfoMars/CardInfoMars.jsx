import './CardInfoMars.css'

const CardInfoMars = ({ icon, title, data }) => {
  return (
    <article className='cardInfoMars flex'>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{data}</p>
    </article>
  )
}

export default CardInfoMars
