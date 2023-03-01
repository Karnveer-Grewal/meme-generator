import React, { useState, useEffect } from 'react';

const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bik.jpg',
  });

  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const memesApiData = await res.json();
      setAllMemes(memesApiData.data.memes);
    }

    getMemes();
  }, []);

  const getMemeImage = () => {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className='meme--container'>
      <div className='meme--inputs'>
        <input
          type='text'
          className='input1'
          placeholder='Top Meme Text'
          name='topText'
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type='text'
          className='input2'
          placeholder='Bottom Meme Text'
          name='bottomText'
          onChange={handleChange}
          value={meme.bottomText}
        />
      </div>

      <button className='meme--button' onClick={getMemeImage}>
        Get a new meme image
      </button>

      <div className='meme'>
        <img src={meme.randomImage} alt='' className='meme--image' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
