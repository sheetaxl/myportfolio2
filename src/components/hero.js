import React from 'react';
import './hero.css';
import heroBg from '../assets/sheetal-bg.jpg.png'; // ✅ Image path

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '100vh',
        color: 'white',
      }}
    >
      <div className="overlay" />
      <div className="hero-content">
        <h1>Hi, I'm <span className="name">Sheetal Sharma</span></h1>
        <p>Frontend Developer | MCA Graduate</p>
      </div>
    </section>
  );
};

export default Hero; // ✅ Export the component

/*import React from 'react';
import './hero.css';


const Hero = () => {
  return (
    <div className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Hi, I’m Sheetal Sharma</h1>
        <p className="lead">MCA Fresher | Aspiring Front-End Developer | Passionate Learner</p>
        <a href="#projects" className="btn btn-light mt-3">See My Projects</a>
      </div>
    </div>
  );
};

export default Hero;*/
