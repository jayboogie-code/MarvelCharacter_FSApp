import React from 'react';
import Typewriter from 'typewriter-effect'; // Import Typewriter effect library
import marvelLogo from '../assets/marvelLogo.png'; // Marvel logo
import marvelBackground from '../assets/marvelBackground.png'; // Background image
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: `url(${marvelBackground})`, // Use the imported background image
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="hero-content">
        <img
          src={marvelLogo} // Use the imported Marvel logo
          alt="Marvel Logo"
          className="marvel-logo"
        />
        <h1 className="hero-title">
          <Typewriter
            options={{
              strings: [
                'Welcome to the Marvel Universe...',
                'Heroes. Villains. Legends.',
                'Discover Your Favorite Characters!',
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default Home;