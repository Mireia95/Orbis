import './RoverTab.css'

const RoverTab = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`roverTab flex ${isActive === name ? 'active' : ''}`}
    >
      <img
        src={`${
          isActive === name
            ? 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1751102052/Orbis/roverv002_btzdwd.png'
            : 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1751102244/Orbis/roverWhitev002_ho3idx.png'
        }`}
        alt={name}
      />{' '}
      {name}
    </button>
  )
}

export default RoverTab
