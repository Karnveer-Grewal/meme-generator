import React from 'react';
import { memesData } from '../memesData';

const Meme = () => {
  let randomUrl;

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    randomUrl = memesArray[randomNum].url;
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
    </main>
  );
};

export default Meme;
