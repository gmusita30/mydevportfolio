import React from 'react'
import '../../Widtw.css';
import ScrollToTop from "react-scroll-to-top";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Widtwpic from "../../assets/widtw.png";
import Widtwpic1 from "../../assets/widtw(1).png";
import Widtwpic2 from "../../assets/widtw(2).png";
import Widtwpic3 from "../../assets/widtw(3).png";
import Widtwpic4 from "../../assets/widtw(4).png";
import Widtwpic5 from "../../assets/widtw(5).png";



const Widtw = () => {
    return(
        <>
        <ScrollToTop smooth />
        <div className="project component__space" id="widtw">
        <div className="container">
          <div className="row">
            
            <div className="colProj__2">
              <h1 className="project__heading">What I did this Weekend Blog</h1>
              <div className="project__meta">
                <p className="project__text">
                  This project was given to us during our internship at TELUS International
                  Philippines where we are tasked to apply our learnings from the React JS 
                  and CSS sessions that the talent pool have conducted for the interns. The main purpose of 
                  the project is to display what we have done for the weekend in a form of a blog.
                </p>
                <br></br>
                <h1 className="project__heading">Technologies Used</h1>
                <ul className="list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>React JS</li>
                </ul>
                <br></br>

                <h1 className="project__heading">Features</h1>
                <ul className="list">
                  <li>React Router DOM</li>
                  <li>Bootstrap Jumbotron</li>
                  <li>Bootstrap Cards</li>
                </ul>
                <br></br>
                <a href='https://gmusita30.github.io/reactjscss03072022/' target="_blank"><button class="glow-on-hover" type="button">View Deployed Project</button> </a>
     
              </div>
            </div>
          </div>
        </div>      
        </div>
    

        <div class="jumbotron vertical-center">
        <div class="container text-center">
            <div class="row">
            <div class="col-md-7">
                <div class="top-bg"></div>
            </div>
            <Carousel className="main-slide">
                    <div>
                        <img src={Widtwpic}  />
                    </div>
                    <div>
                        <img src={Widtwpic1} />
                    </div>
                    <div>
                        <img src={Widtwpic2}/>
                    </div>
                    <div>
                        <img src={Widtwpic3}/>
                    </div>
                    <div>
                        <img src={Widtwpic4} />
                    </div>
                    <div>
                        <img src={Widtwpic5} />
                    </div>
                </Carousel>  
            </div>
        </div>
        
        </div>
        </>
    )
}


export default Widtw