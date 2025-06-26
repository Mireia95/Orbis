import { Link } from 'react-router-dom'
import './ButtonLink.css'

const ButtonLink = ({ text, path, primButt = false }) => {
  return (
    <Link className={`btn-link ${primButt ? 'primButt' : ''}`} to={path}>
      {text}
    </Link>
  )
}

export default ButtonLink
