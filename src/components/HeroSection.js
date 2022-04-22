import React from 'react';
import '../App.css';
import './HeroSection.css';
import ScrollToTop from "react-scroll-to-top";
import CV from '../assets/Usita, Gabriel Adrian_CV.pdf'

import Typical from 'react-typical'

function HeroSection() {
  return (
    <div id="hero" className='hero-container'>
      <ScrollToTop smooth />

      <h5>Hello!</h5>
      <video src='https://user-images.githubusercontent.com/60341467/163719536-ffb33a49-0a21-4bb0-8df4-ce455e5d5553.mp4' autoPlay loop muted />
      <h1>I'm Gabriel Adrian M. Usita</h1>
      <p> {' '}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "I'm an aspiring Full-Stack Developer",
            2000,
            'Information Technology Student/Intern',
            2000
          ]}
        ></Typical>
      </p>
      <>
      <a href={CV} download target="_blank">
      <button class="btn-change4">Download CV here</button>
      </a>
      </>

      
    </div>
  );
}

export default HeroSection;
