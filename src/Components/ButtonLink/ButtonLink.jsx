import { Link } from 'react-router-dom'
import './ButtonLink.css'

const ButtonLink = ({
  text,
  path,
  primButt = false,
  img,
  alt = '',
  className
}) => {
  return (
    <Link
      className={`btn-link ${primButt ? 'primButt' : ''} ${
        className ? className : ''
      }`}
      to={path}
    >
      {img ? <img src={img} alt={alt} /> : null}
      {text}
    </Link>
  )
}

export default ButtonLink
