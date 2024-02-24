import React from 'react';
import './App.css';
import myImage from './planet_3.jpg';

function StarWarsDescription() {
  return (
    <>
    <div className="main_page">
      <div className="home_page">
        <h2 className='home_page_title'>Star Wars</h2>
        <p className="description">
          Star Wars is an American epic space opera media franchise created by George Lucas. It began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is one of the highest-grossing media franchises of all time.
          The Star Wars franchise depicts the adventures of characters “A long time ago in a galaxy far, far away” across multiple fictional eras, in which humans and many species of aliens (often humanoid) co-exist with robots (typically referred to in the films as ‘droids’), which may be programmed for personal assistance or battle. Space travel between planets is common due to lightspeed hyperspace technology.
        </p>
        <div className='img'>
          <img src={myImage} alt="Planet" /> {/* Here's how you use the imported image */}
        </div>
      </div>
      <hr className="hr" />
    </div>
    </>
  );
}

export default StarWarsDescription;
