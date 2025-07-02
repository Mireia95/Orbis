import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import './Header.css';
import Nav from '../Nav/Nav';
import { useState } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <header className='flex header-desktop'>
        <Logo />
        <Nav />
      </header>
      <img
        className='header-mobile menu'
        onClick={() => setIsMobile(!isMobile)}
        src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1751435898/Orbis/menu_qlbwho.png'
        alt='menu'
      />
      <header className={`flex header-mobile ${isMobile ? 'isMobile' : ''}`}>
        <img
          src='https://res.cloudinary.com/dr2vohk2z/image/upload/v1751437144/Orbis/close_hslbyi.png'
          alt='close menu'
          onClick={() => setIsMobile(false)}
        ></img>
        <Logo />
        <Nav />
      </header>
    </>
  );
};

export default Header;
