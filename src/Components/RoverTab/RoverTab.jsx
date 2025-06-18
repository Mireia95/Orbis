import './RoverTab.css';

const RoverTab = ({ name, isActive = false }) => {
  return (
    <button
      onClick={() => {
        console.log(name);
      }}
      className={`roverTab flex ${isActive ? 'active' : ''}`}
    >
      <img
        src={`${
          isActive
            ? 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1750228799/Marsexplorer/RoverTabActive_bso7ba.png'
            : 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1750228771/Marsexplorer/RoverTab_ogrcvr.png'
        }`}
        alt={name}
      />{' '}
      {name}
    </button>
  );
};

export default RoverTab;
