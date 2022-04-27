import React, { useEffect} from 'react';
import './About.css';
import aboutImg from "../assets/gradpic.jpg";

import Aos from "aos";
import "aos/dist/aos.css";


function About() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
    return (
      <div className="about component__space" id="About">
        <div className="container">
          <div className="row">
            <div data-aos="zoom-in-right" className="col__2">
              <img src={aboutImg} alt="asas" className="about__img"  height='700' />
            </div>
            <div className="col__2">
              <h1 data-aos="fade-down" className="about__heading">About Me</h1>
              <div className="about__meta">
                <p data-aos="fade-left" className="about__text">
                I am a graduating student from the University of Santo Tomas pursuing the program of BS Information Technology specializing in Web and Mobile App Development. I have experienced working on projects from our Software Engineering and Capstone courses as a System Developer which helped me gain knowledge and skills on how to develop Web and Mobile Applications.
                </p>
                <br></br>
                <p  data-aos="fade-left" className="about__text">
                Currently, I am having my internship at TELUS International Philippines Inc - Digital Solutions under the Developer Team. I have learned and improved my soft and technical skills during this internship as we are exposed into various training sessions. We also have activities/projects which will gauge the level of understanding that we gain from the said trainings especially in technical aspect and creativity on how we could make an impact for our outputs. This experience also helped me to improve my presentation skills as well as my productivity in participating with activities where we work as a team.
                </p>
                <br></br>
                <p data-aos="fade-left" className="about__text">
                Here are the technologies that I have been learning, experienced working, and improving recently from various activities/projects that I have worked on so far:
                </p>
                <br></br>
                <ul data-aos="slide-left" className="list__about">
                  <li data-aos="slide-left">HTML</li>
                  <li data-aos="slide-left">CSS</li>
                  <li data-aos="slide-left">Bootstrap</li>
                  <li data-aos="slide-left">JavaScript</li>
                  <li data-aos="slide-left">React</li>
                  <li data-aos="slide-left">Node.js</li>
                  <li data-aos="slide-left">Express</li>
                  <li data-aos="slide-left">MongoDB</li>
                  <li data-aos="slide-left">Java</li>
                  <li data-aos="slide-left">Firebase</li>
                  <li data-aos="slide-left">Python</li>
                  <li data-aos="slide-left">PHP</li>
                </ul>
       
              </div>
            </div>
          </div>
        </div>
       
        </div>
    
    );
  }
  
  export default About;