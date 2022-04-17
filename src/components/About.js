import React from 'react';
import './About.css';
import aboutImg from "../assets/gradpic.jpg";


function About() {
    return (
      <div className="about component__space" id="About">
        <div className="container">
          <div className="row">
            <div className="col__2">
              <img src={aboutImg} alt="asas" className="about__img"  height='700' />
            </div>
            <div className="col__2">
              <h1 className="about__heading">About Me</h1>
              <div className="about__meta">
                <p className="about__text">
                I am a graduating student from the University of Santo Tomas pursuing the program of BS Information Technology specializing in Web and Mobile App Development. I have experienced working on projects from our Software Engineering and Capstone courses as a System Developer which helped me gain knowledge and skills on how to develop Web and Mobile Applications.
                </p>
                <br></br>
                <p className="about__text">
                Currently, I am having my internship at TELUS International Philippines Inc - Digital Solutions under the Developer Team. I have learned and improved my soft and technical skills during this internship as we are exposed into various training sessions. We also have activities/projects which will gauge the level of understanding that we gain from the said trainings especially in technical aspect and creativity on how we could make an impact for our outputs. This experience also helped me to improve my presentation skills as well as my productivity in participating with activities where we work as a team.
                </p>
                <br></br>
                <p className="about__text">
                Here are the technologies that I have been learning, experienced working, and improving recently from various activities/projects that I have worked on so far:
                </p>
                <br></br>
                <ul className="list__about">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Java</li>
                  <li>Firebase</li>
                  <li>Python</li>
                  <li>PHP</li>
                </ul>
       
              </div>
            </div>
          </div>
        </div>
       
        </div>
    
    );
  }
  
  export default About;