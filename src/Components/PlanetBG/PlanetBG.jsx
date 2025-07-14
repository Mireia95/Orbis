import { useLocation } from 'react-router-dom';
import './PlanetBG.css';
import { useEffect, useState } from 'react';

const PlanetBG = () => {
  const location = useLocation();
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(0.8);

  //check is is first load
  const firstLoad = location.pathname === '/' && rotation === 0;

  useEffect(() => {
    if (location.pathname === '/') {
      setOpacity(0.8);
      setRotation(0);
    } else {
      setOpacity(0.4);
    }
    if (!firstLoad) {
      setRotation((prev) => prev + 45);
    }
  }, [location.pathname]);
  return (
    <div className={'planetBG'}>
      <img
        className={firstLoad ? 'fadeInOut' : ''}
        style={{
          opacity: opacity,
          transform: `translateX(-50%) rotate(${rotation}deg)`,
          transition: 'transform 1s ease'
        }}
        src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1750681673/Orbis/ORBISBG_wokwmt.png'
        alt='planet'
      />
    </div>
  );
};

export default PlanetBG;
