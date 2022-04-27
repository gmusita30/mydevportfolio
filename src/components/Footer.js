import React, {useEffect} from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

import Aos from "aos";
import "aos/dist/aos.css";



function Footer() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <>   
    <div className='footer-container' id="contact">
      <section className='footer-subscription'>
        <p data-aos="zoom-in-down" className='footer-subscription-heading'>Got Interested?</p>
        <p data-aos="zoom-in-up" className='footer-subscription-text'>
          If you want to know more about me or if you are interested in working with me or hiring me as your Developer,<br></br> feel free to contact me through my social media accounts below.<br></br>Any message would be much appreciated. Thank you!</p>
      </section>

      <div className='social-container'>
        <a data-aos="flip-right" href='https://www.linkedin.com/in/gabriel-adrian-usita/' target="_blank" className='ld'><FontAwesomeIcon icon={faLinkedin} size='3x'/></a>
        <a data-aos="flip-left" href='https://mail.google.com/mail/?view=cm&source=mailto&to=gabrielusita@gmail.com' target="_blank" className='gm'><FontAwesomeIcon icon={faGoogle} size='3x'/></a>
        <a data-aos="flip-up" href='https://github.com/gmusita30' target="_blank" className='gh'><FontAwesomeIcon icon={faGithub} size='3x'/></a>
        <a data-aos="flip-down" href='https://www.facebook.com/gabriel.usita/' target="_blank" className='fb'><FontAwesomeIcon icon={faFacebook} size='3x'/></a>



      </div>

      <div className='cpy'>
      <footer> <small> Copyright © 2022, Gabriel Usita</small> </footer> 
      </div>

 
     
    </div>
    </>
  );
}

export default Footer;
