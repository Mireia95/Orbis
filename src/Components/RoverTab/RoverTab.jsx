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
            ? 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1750228799/Marsexplorer/RoverTabActive_bso7ba.png'
            : 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1750228771/Marsexplorer/RoverTab_ogrcvr.png'
        }`}
        alt={name}
      />{' '}
      {name}
    </button>
  )
}

export default RoverTab
