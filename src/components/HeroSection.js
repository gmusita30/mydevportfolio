import React from 'react';
import '../App.css';
import './HeroSection.css';
import ScrollToTop from "react-scroll-to-top";
import CV from '../assets/Usita-Gabriel-ust-cics.pdf'

import Typical from 'react-typical'

function HeroSection() {
  return (
    <div id="hero" className='hero-container'>
      <ScrollToTop smooth />

      <h5>Hello!</h5>
      <video src='https://vod-progressive.akamaized.net/exp=1650173931~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F521%2F17%2F427607440%2F1854773919.mp4~hmac=4385910028e4c59777732130bd9ad9b8ebadb80a8c07ff95afe1faf6b42e3a32/vimeo-prod-skyfire-std-us/01/521/17/427607440/1854773919.mp4?filename=Computer+-+36503.mp4' autoPlay loop muted />
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
