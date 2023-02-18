import React from 'react';
import trollImg from '../images/troll-face.png';

const Header = () => {
  return (
    <nav className='header'>
      <img src={trollImg} alt='' />
      <h1>Meme Generator</h1>
      <h2>Personal Project</h2>
    </nav>
  );
};

export default Header;
