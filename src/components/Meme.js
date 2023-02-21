import React, { useState } from 'react';
import { memesData } from '../memesData';

const Meme = () => {
  const [memeImage, setMemeImage] = useState('');

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNum].url);
  };

  return (
    <main className='meme--container'>
      <div className='meme--inputs'>
        <input type='text' className='input1' placeholder='Top Meme Text' />
        <input type='text' className='input2' placeholder='Bottom Meme Text' />
      </div>

      <button className='meme--button' onClick={getMemeImage}>
        Get a new meme image
      </button>
      <img src={memeImage} alt='' className='meme--image' />
    </main>
  );
};

export default Meme;
