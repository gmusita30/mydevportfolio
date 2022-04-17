import React from 'react'
import '../../Ibgame.css';
import ScrollToTop from "react-scroll-to-top";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Ibgamepic from "../../assets/ibgame.png";
import Ibgamepic1 from "../../assets/ibgame1.png";
import Ibgamepic2 from "../../assets/ibgame2.png";
import Ibgamepic3 from "../../assets/ibgame3.png";
import Ibgamepic4 from "../../assets/ibgame4.png";
import Ibgamepic5 from "../../assets/ibgame5.png";
import Ibgamepic6 from "../../assets/ibgame6.png";

const Ibgame = () => {
    return(
        <>
        <ScrollToTop smooth />
        <div className="project component__space" id="ibgame">
        <div className="container">
          <div className="row">
            
            <div className="colProj__2">
              <h1 className="project__heading">In-between game using React JS</h1>
              <div className="project__meta">
                <p className="project__text">
                  This project was given to us as an activity for our elective class about React JS in University of Santo Tomas. We are tasked to create an In-between game using React JS.
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
                  <li>User have 5 rounds of plays</li>
                  <li>The game shall randomly draw TWO numbers</li>
                  <li>The program shall allow the user choose to “Deal” or “No Deal”</li>
                  <li>Third number will be revealed only AFTER the user choose an option of “Deal” or “No Deal</li>
                  <li>If two cards are NOT identical, The player has the option to choose between DEAL or NO DEAL. f the user chose DEAL - the player WINS the game if the THIRD number is in-between the first two drawn numbers. Otherwise, the player LOSES. (WIN: Add one point to the total score. LOSE: Deduct one point to the total score. No Deal deduct 0.5 points)</li>
                  <li>If two cards ARE identical, The player has the option to choose between Higher or Lower. If the user chose HIGHER - the player  WINS the game if the THIRD number is higher than the first two identical drawn numbers. Otherwise, the player LOSES. If the user chose LOWER- the player WINS the game if the THIRD number is higher than the first two identical drawn cards. Otherwise, the player LOSES. If the third randomized number is the same as the first two numbers, it is considered as a loss. (WIN: Add one point to the total score. LOSE: Deduct one point to the total score. No Deal deduct 0.5 points)</li>
                </ul>
                <br></br>
                <a href='https://gmusita30.github.io/in-between-game-using-react/' target="_blank"><button class="glow-on-hover" type="button">View Deployed Project</button> </a>
     
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
                        <img src={Ibgamepic}  />
                    </div>
                    <div>
                        <img src={Ibgamepic1} />
                    </div>
                    <div>
                        <img src={Ibgamepic2}/>
                    </div>
                    <div>
                        <img src={Ibgamepic3}/>
                    </div>
                    <div>
                        <img src={Ibgamepic4} />
                    </div>
                    <div>
                        <img src={Ibgamepic5} />
                    </div>
                    <div>
                        <img src={Ibgamepic6} />
                    </div>
                </Carousel>  
            </div>
        </div>
        
        </div>
        </>
    )
}


export default Ibgame