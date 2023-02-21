import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';

import './style.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Meme />
    </div>
  );
};

export default App;
