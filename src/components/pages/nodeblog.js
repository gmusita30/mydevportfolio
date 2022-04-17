import React from 'react'
import '../../nodeblog.css';
import ScrollToTop from "react-scroll-to-top";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Nodeblog from "../../assets/nodeblog.png";
import Nodeblog1 from "../../assets/nodeblog(1).png";
import Nodeblog2 from "../../assets/nodeblog(2).png";
import Nodeblog3 from "../../assets/nodeblog(3).png";
import Nodeblog4 from "../../assets/nodeblog(4).png";
import Nodeblog5 from "../../assets/nodeblog(5).png";


const nodeblog = () => {
    return(
        <>
        <ScrollToTop smooth />
        <div className="project component__space" id="widtw">
        <div className="container">
          <div className="row">
            
            <div className="colProj__2">
              <h1 className="project__heading">Siklista Blog using Node</h1>
              <div className="project__meta">
                <p className="project__text">
                  This project was given to us during our internship at TELUS International
                  Philippines where we are tasked to apply our learnings from the JavaScript
                  sessions that Ma'am Julette Biton have conducted for the interns. The main purpose of 
                  the project is to create a Node.js blog site Web Application where it allows the user to create, save, delete, and search a blog.
                </p>
                <br></br>
                <h1 className="project__heading">Technologies Used</h1>
                <ul className="list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>NodeJS</li>
                </ul>
                <br></br>

                <h1 className="project__heading">Features</h1>
                <ul className="list">
                  <li>Allows User to Create a Blog</li>
                  <li>Allows User to Read Blogs</li>
                  <li>Allows User to Delete/Delete all Blogs</li>
                  <li>Allows User to Search a Blog</li>
                </ul>
                <br></br>     
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
                        <img src={Nodeblog}  />
                    </div>
                    <div>
                        <img src={Nodeblog1} />
                    </div>
                    <div>
                        <img src={Nodeblog2}/>
                    </div>
                    <div>
                        <img src={Nodeblog3}/>
                    </div>
                    <div>
                        <img src={Nodeblog4} />
                    </div>
                    <div>
                        <img src={Nodeblog5} />
                    </div>
                </Carousel>  
            </div>
        </div>
        
        </div>
        </>
    )
}


export default nodeblog