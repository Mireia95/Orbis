import ButtonLink from '../ButtonLink/ButtonLink'
import './ButtonBack.css'

const ButtonBack = ({ path }) => {
  return (
    <ButtonLink
      text='BACK'
      img='https://res.cloudinary.com/dr2vohk2z/image/upload/v1751106131/Orbis/BackIcon_yy5lta.png'
      alt='back'
      path={path}
      className='back'
    />
  )
}

export default ButtonBack
