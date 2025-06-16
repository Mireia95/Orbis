import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ text, pathNav, className = 'secButt' }) => {
  const navigate = useNavigate();

  return (
    <button className={className} onClick={() => navigate(pathNav)}>
      {' '}
      {text}{' '}
    </button>
  );
};

export default Button;
