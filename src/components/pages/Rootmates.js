import React from 'react'
import '../../Rootmates.css';
import ScrollToTop from "react-scroll-to-top";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Rootmates0 from "../../assets/rootmates.png";
import Rootmates1 from "../../assets/rootmates(1).png";
import Rootmates2 from "../../assets/rootmates(2).png";
import Rootmates3 from "../../assets/rootmates(3).png";
import Rootmates4 from "../../assets/rootmates(4).png";
import Rootmates5 from "../../assets/rootmates(5).png";
import Rootmates6 from "../../assets/rootmates(6).png";
import Rootmates7 from "../../assets/rootmates(7).png";
import Rootmates8 from "../../assets/rootmates(8).png";
import Rootmates9 from "../../assets/rootmates(9).png";
import Rootmates10 from "../../assets/rootmates(10).png";
import Rootmates11 from "../../assets/rootmates(11).png";
import Rootmates12 from "../../assets/rootmates(12).png";

const Rootmates = () => {
    return(
        <>
        <ScrollToTop smooth />
        <div className="project component__space" id="widtw">
        <div className="container">
          <div className="row">
            
            <div className="colProj__2">
              <h1 className="project__heading">Rootmates Clothing</h1>
              <div className="project__meta">
                <p className="project__text">
                  This project was a requirement for us in our Software Engineering course when we are in our 3rd year in college. The team made an agreement to a business named Rootmate’s Clothing to create a web-based ordering system to promote their startup business. The team’s main objective is to create a web-based ordering system where the users can generally purchase designs online and at the same time, promote the client’s business, attain the client’s needs and create an inventory system to manage their stocks.
                </p>
                <br></br>
                <h1 className="project__heading">Technologies Used</h1>
                <ul className="list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                </ul>
                <br></br>

                <h1 className="project__heading">Features</h1>
                <p style={{color:'white'}}>Admin Side</p>
                <br></br>
                <ul className="list">
                  <li>CRUD Operations</li>
                  <li>Sign Up & Login</li>
                  <li>Accept / Reject Orders</li>
                  <li>Update Inventory</li>
                  <li>Accept Feedback</li>
                  <li>Accept / Deny Marketing Requests</li>
                  <li>Manage Users</li>
                </ul>
                <br></br>

                <p style={{color:'white'}}>Customer Side</p>
                <br></br>
                <ul className="list">
                  <li>Sign Up & Login</li>
                  <li>View Products</li>
                  <li>Add Products to Cart / Buy Products</li>
                  <li>Manage Own Account</li>
                  <li>Give Comments to the product</li>
                  <li>Get notified for order status</li>
                </ul>
                <br></br>
                <a href='https://rootmates.epizy.com/' target="_blank"><button class="glow-on-hover" type="button">View Deployed Project</button> </a>
     
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
                        <img src={Rootmates0}  />
                    </div>
                    <div>
                        <img src={Rootmates1} />
                    </div>
                    <div>
                        <img src={Rootmates2}/>
                    </div>
                    <div>
                        <img src={Rootmates3}/>
                    </div>
                    <div>
                        <img src={Rootmates4} />
                    </div>
                    <div>
                        <img src={Rootmates5} />
                    </div>
                    <div>
                        <img src={Rootmates6} />
                    </div>
                    <div>
                        <img src={Rootmates7} />
                    </div>
                    <div>
                        <img src={Rootmates8} />
                    </div>
                    <div>
                        <img src={Rootmates9} />
                    </div>
                    <div>
                        <img src={Rootmates10} />
                    </div>
                    <div>
                        <img src={Rootmates11} />
                    </div>
                    <div>
                        <img src={Rootmates12} />
                    </div>
                </Carousel>  
            </div>
        </div>
        
        </div>
        </>
    )
}


export default Rootmates