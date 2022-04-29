import React, {useEffect} from 'react';
import '../App.css';
import './HeroSection.css';
import ScrollToTop from "react-scroll-to-top";
import CV from '../assets/Usita, Gabriel Adrian_CV.pdf'

import Typical from 'react-typical'
import Aos from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div id="hero" className='hero-container'>
      <ScrollToTop smooth />

      <h5 data-aos="slide-right">Hello!</h5>
      <video src='https://user-images.githubusercontent.com/60341467/163719536-ffb33a49-0a21-4bb0-8df4-ce455e5d5553.mp4' autoPlay loop muted />
      <h1 data-aos="slide-down" >I'm Gabriel Adrian M. Usita</h1>
      <p data-aos="slide-left"> {' '}
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
      <a data-aos="slide-up" href={CV} download target="_blank">
      <button  class="btn-change4">Download CV here</button>
      </a>
      </>

      
    </div>
  );
}

export default HeroSection;
