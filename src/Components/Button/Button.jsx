import './Button.css'

const Button = ({ text, onClick, className = 'secButt' }) => {
  return (
    <button className={className} onClick={onClick}>
      {' '}
      {text}{' '}
    </button>
  )
}

export default Button
