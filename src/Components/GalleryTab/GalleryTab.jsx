import RoverTab from '../RoverTab/RoverTab';
import './GalleryTab.css';

const GalleryTab = () => {
  return (
    <div>
      <RoverTab name='SPIRIT'></RoverTab>
      <RoverTab name='CURIOSITY'></RoverTab>
      <RoverTab name='OPPORTUNITY'></RoverTab>
    </div>
  );
};

export default GalleryTab;
