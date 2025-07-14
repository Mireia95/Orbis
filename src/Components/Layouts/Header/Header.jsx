import Logo from '../../Logo/Logo';
import './Header.css';
import Nav from '../Nav/Nav';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className='flex header-desktop'>
        <Logo />
        <Nav />
      </header>

      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        color='#fff8f8'
        direction='right'
        onToggle={(toggled) => {
          if (toggled) {
            setIsMobile(true);
          } else {
            setIsMobile(false);
          }
        }}
      />
      <header className={`flex header-mobile ${isMobile ? 'isMobile' : ''}`}>
        <Logo text={false} />
        <Nav />
      </header>
    </>
  );
};

export default Header;
