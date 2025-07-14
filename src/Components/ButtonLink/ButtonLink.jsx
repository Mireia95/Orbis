import { Link } from 'react-router-dom';
import './ButtonLink.css';

const ButtonLink = ({
  text,
  path,
  primButt = false,
  img,
  alt = '',
  className,
  state
}) => {
  return (
    <Link
      state={state}
      className={`btn-link ${primButt ? 'primButt' : ''} ${
        className ? className : ''
      }`}
      to={path}
    >
      {img ? <img src={img} alt={alt} /> : null}
      {text && <span className='btn-text'>{text}</span>}
    </Link>
  );
};

export default ButtonLink;
