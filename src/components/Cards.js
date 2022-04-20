import React, { useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Ibgamepic from "../assets/ibgame.png";
import Ibgamepic1 from "../assets/ibgame1.png";
import Ibgamepic2 from "../assets/ibgame2.png";
import Ibgamepic3 from "../assets/ibgame3.png";
import Ibgamepic4 from "../assets/ibgame4.png";
import Ibgamepic5 from "../assets/ibgame5.png";
import Ibgamepic6 from "../assets/ibgame6.png";

import Rootmates0 from "../assets/rootmates.png";
import Rootmates1 from "../assets/rootmates(1).png";
import Rootmates2 from "../assets/rootmates(2).png";
import Rootmates3 from "../assets/rootmates(3).png";
import Rootmates4 from "../assets/rootmates(4).png";
import Rootmates5 from "../assets/rootmates(5).png";
import Rootmates6 from "../assets/rootmates(6).png";
import Rootmates7 from "../assets/rootmates(7).png";
import Rootmates8 from "../assets/rootmates(8).png";
import Rootmates9 from "../assets/rootmates(9).png";
import Rootmates10 from "../assets/rootmates(10).png";
import Rootmates11 from "../assets/rootmates(11).png";
import Rootmates12 from "../assets/rootmates(12).png";

import Nodeblog from "../assets/nodeblog.png";
import Nodeblog1 from "../assets/nodeblog(1).png";
import Nodeblog2 from "../assets/nodeblog(2).png";
import Nodeblog3 from "../assets/nodeblog(3).png";
import Nodeblog4 from "../assets/nodeblog(4).png";
import Nodeblog5 from "../assets/nodeblog(5).png";

import Widtwpic from "../assets/widtw.png";
import Widtwpic1 from "../assets/widtw(1).png";
import Widtwpic2 from "../assets/widtw(2).png";
import Widtwpic3 from "../assets/widtw(3).png";
import Widtwpic4 from "../assets/widtw(4).png";
import Widtwpic5 from "../assets/widtw(5).png";

import Remindmed from "../assets/remindmed.png";
import Remindmed0 from "../assets/remindmed0.png";
import Remindmed1 from "../assets/remindmed1.png";
import Remindmed2 from "../assets/remindmed2.png";
import Remindmed3 from "../assets/remindmed3.png";
import Remindmed4 from "../assets/remindmed4.png";
import Remindmed5 from "../assets/remindmed5.png";
import Remindmed6 from "../assets/remindmed6.png";
import Remindmed8 from "../assets/remindmed8.png";
import Remindmed9 from "../assets/remindmed9.png";
import Remindmed11 from "../assets/remindmed11.png";
import Remindmed12 from "../assets/remindmed12.png";
import Remindmed14 from "../assets/remindmed14.png";

Modal.setAppElement('#root')

function Cards() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalIsOpen1, setModalIsOpen1] = useState(false)
  const [modalIsOpen2, setModalIsOpen2] = useState(false)
  const [modalIsOpen3, setModalIsOpen3] = useState(false)
  const [modalIsOpen4, setModalIsOpen4] = useState(false)

  return (
    <>
    <div id="projects" className='cards'>
      <h1 className="card__heading">My Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/remindmed15.png'
              text='RemindMed: Medication Reminder and Tracker using Optical Character Recognition and Text-to-Speech'
              onClick={() => setModalIsOpen4(true)}
            />
            <Modal isOpen={modalIsOpen4} onRequestClose={() => setModalIsOpen4(false)}>
              <h2>RemindMed Mobile Application</h2>
              <br></br>
              <p>This project was a requirement for us in our Capstone I & II course when we are in our Special term and 4th year in college. The purpose of this project is to provide a mobile application that would assist older adults or senior citizens to keep track of their medications and help in reminding them to take their medicine as prescribed by their doctors. The application aims to help people who tend to forget to properly take their medication on-time, especially for people who have chronic diseases and the elderly. Using the OCR technology and text to speech, the application is also designed to help a wide range of users, especially for people of old age and outpatients who have poor or deteriorating eyesight in determining the medication they will be taking. </p>
              <br></br>
              <h2>Technologies Used</h2>
              <ul style={{paddingLeft: "50px"}}>
                  <li>Java</li>
                  <li>XML</li>
                  <li>Google Vision API</li>
                  <li>Firebase/Firestore</li>
                  <li>Android Studio IDE</li>
              </ul>
              <br></br>
              <h2>Features</h2>
              <ul style={{paddingLeft: "50px"}}>
                  <li>CRUD Operations</li>
                  <li>Sign Up & Login</li>
                  <li>Manage Own Account</li>
                  <li>Manage Medication Schedule</li>
                  <li>Manage Health Measurement</li>
                  <li>View Schedule</li>
                  <li>View Medication and Health Measurement History</li>
                  <li>Notify Medication and Health Measurement</li>
              </ul>
              <br></br>
              <div>
                <Carousel className="main-slide">
                            <div>
                                <img src={Remindmed}  />
                            </div>
                            <div>
                                <img src={Remindmed0} />
                            </div>
                            <div>
                                <img src={Remindmed1} />
                            </div>
                            <div>
                                <img src={Remindmed2}/>
                            </div>
                            <div>
                                <img src={Remindmed3}/>
                            </div>
                            <div>
                                <img src={Remindmed4}/>
                            </div>
                            <div>
                                <img src={Remindmed5}/>
                            </div>
                            <div>
                                <img src={Remindmed6}/>
                            </div>
                            <div>
                                <img src={Remindmed8}/>
                            </div>
                            <div>
                                <img src={Remindmed9}/>
                            </div>
                            <div>
                                <img src={Remindmed11}/>
                            </div>
                            <div>
                                <img src={Remindmed12}/>
                            </div>
                            <div>
                                <img src={Remindmed14} />
                            </div>
                        </Carousel>  
              </div>
              <div>
                <button style={{width: "70px", height: "40px"}} class="glow-on-hover" onClick={() => setModalIsOpen4(false)}>Close</button>
              </div>
            </Modal>
            <CardItem
              src='images/rootmates.png'
              text='Online Ordering System Designated For Custom Printing'
              onClick={() => setModalIsOpen1(true)}
            />
            <Modal isOpen={modalIsOpen1} onRequestClose={() => setModalIsOpen1(false)}>
              <h2>Rootmates Clothing</h2>
              <br></br>
              <p>This project was a requirement for us in our Software Engineering course when we are in our 3rd year in college. The team made an agreement to a business named Rootmate’s Clothing to create a web-based ordering system to promote their startup business. The team’s main objective is to create a web-based ordering system where the users can generally purchase designs online and at the same time, promote the client’s business, attain the client’s needs and create an inventory system to manage their stocks.</p>
              <br></br>
              <h2>Technologies Used</h2>
              <ul style={{paddingLeft: "50px"}}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>PHP</li>
                  <li>MySQL</li>
              </ul>
              <br></br>
              <h2>Features</h2>
              <br></br>
              <h3>Admin Side</h3>
              <ul style={{paddingLeft: "50px"}}>
                  <li>CRUD Operations</li>
                  <li>Sign Up & Login</li>
                  <li>Accept / Reject Orders</li>
                  <li>Update Inventory</li>
                  <li>Accept Feedback</li>
                  <li>Accept / Deny Marketing Requests</li>
                  <li>Manage Users</li>
              </ul>
              <br></br>
              <h3>Customer Side</h3>
              <ul style={{paddingLeft: "50px"}}>
                  <li>Sign Up & Login</li>
                  <li>View Products</li>
                  <li>Add Products to Cart / Buy Products</li>
                  <li>Manage Own Account</li>
                  <li>Give Comments to the product</li>
                  <li>Get notified for order status</li>
              </ul>
              <br></br>
              <a href='https://rootmates.epizy.com/' target="_blank"><button style={{width: "170px", height: "60px"}} class="glow-on-hover" type="button">View Deployed Project</button> </a>

              <div>
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
                                <img src={Rootmates4}/>
                            </div>
                            <div>
                                <img src={Rootmates5}/>
                            </div>
                            <div>
                                <img src={Rootmates6}/>
                            </div>
                            <div>
                                <img src={Rootmates7}/>
                            </div>
                            <div>
                                <img src={Rootmates8}/>
                            </div>
                            <div>
                                <img src={Rootmates9}/>
                            </div>
                            <div>
                                <img src={Rootmates10}/>
                            </div>
                            <div>
                                <img src={Rootmates11}/>
                            </div>
                            <div>
                                <img src={Rootmates12}/>
                            </div>
                        </Carousel>  
              </div>
              <div>
                <button style={{width: "70px", height: "40px"}} class="glow-on-hover" onClick={() => setModalIsOpen1(false)}>Close</button>
              </div>
            </Modal>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ibgame5.png'
              text='In-between Game using React JS'
              onClick={() => setModalIsOpen(true)}
            />
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
              <h2>In-between game using React JS</h2>
              <br></br>
              <p>This project was given to us as an activity for our elective class about React JS in University of Santo Tomas. We are tasked to create an In-between game using React JS.</p>
              <br></br>
              <h2>Technologies Used</h2>
              <ul style={{paddingLeft: "50px"}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>React JS</li>
              </ul>
              <br></br>
              <h2>Features</h2>
              <ul style={{paddingLeft: "50px"}}>
              <li>User have 5 rounds of plays</li>
                <li>The game shall randomly draw TWO numbers</li>
                <li>The program shall allow the user choose to “Deal” or “No Deal”</li>
                <li>Third number will be revealed only AFTER the user choose an option of “Deal” or “No Deal</li>
                <li>If two cards are NOT identical, The player has the option to choose between DEAL or NO DEAL. f the user chose DEAL - the player WINS the game if the THIRD number is in-between the first two drawn numbers. Otherwise, the player LOSES. (WIN: Add one point to the total score. LOSE: Deduct one point to the total score. No Deal deduct 0.5 points)</li>
                <li>If two cards ARE identical, The player has the option to choose between Higher or Lower. If the user chose HIGHER - the player  WINS the game if the THIRD number is higher than the first two identical drawn numbers. Otherwise, the player LOSES. If the user chose LOWER- the player WINS the game if the THIRD number is higher than the first two identical drawn cards. Otherwise, the player LOSES. If the third randomized number is the same as the first two numbers, it is considered as a loss. (WIN: Add one point to the total score. LOSE: Deduct one point to the total score. No Deal deduct 0.5 points)</li>
              </ul>
              <br></br>
              <a href='https://gmusita30.github.io/in-between-game-using-react/' target="_blank"><button style={{width: "170px", height: "60px"}} class="glow-on-hover" type="button">View Deployed Project</button> </a>

              <div>
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
              <div>
                <button style={{width: "70px", height: "40px"}} class="glow-on-hover" onClick={() => setModalIsOpen(false)}>Close</button>
              </div>
            </Modal>
            <CardItem
              src='images/nodeblog.png'
              text='Siklista Blog using NodeJS'
              onClick={() => setModalIsOpen2(true)}

            />
              <Modal isOpen={modalIsOpen2} onRequestClose={() => setModalIsOpen2(false)}>
              <h2>Siklista Blog using Node</h2>
              <br></br>
              <p>This project was given to us during our internship at TELUS International
                  Philippines where we are tasked to apply our learnings from the JavaScript
                  sessions that Ma'am Julette Biton have conducted for the interns. The main purpose of 
                  the project is to create a Node.js blog site Web Application where it allows the user to create, save, delete, and search a blog.</p>
              <br></br>
              <h2>Technologies Used</h2>
              <ul style={{paddingLeft: "50px"}}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>NodeJS</li>
              </ul>
              <br></br>
              <h2>Features</h2>
              <ul style={{paddingLeft: "50px"}}>
                  <li>Allows User to Create a Blog</li>
                  <li>Allows User to Read Blogs</li>
                  <li>Allows User to Delete/Delete all Blogs</li>
                  <li>Allows User to Search a Blog</li>
              </ul>
              <br></br>
              <div>
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
                                <img src={Nodeblog4}/>
                            </div>
                            <div>
                                <img src={Nodeblog5}/>
                            </div>
                            
                        </Carousel>  
              </div>
              <div>
                <button style={{width: "70px", height: "40px"}} class="glow-on-hover" onClick={() => setModalIsOpen2(false)}>Close</button>
              </div>
            </Modal>
            <CardItem
              src='images/widtw.png'
              text='What I did this Weekend blog using React JS'
              onClick={() => setModalIsOpen3(true)}
            />
            <Modal isOpen={modalIsOpen3} onRequestClose={() => setModalIsOpen3(false)}>
              <h2>What I did this Weekend Blog</h2>
              <br></br>
              <p>This project was given to us during our internship at TELUS International
                  Philippines where we are tasked to apply our learnings from the React JS 
                  and CSS sessions that the talent pool have conducted for the interns. The main purpose of 
                  the project is to display what we have done for the weekend in a form of a blog.</p>
              <br></br>
              <h2>Technologies Used</h2>
              <ul style={{paddingLeft: "50px"}}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>React JS</li>
              </ul>
              <br></br>
              <h2>Features</h2>
              <ul style={{paddingLeft: "50px"}}>
                  <li>React Router DOM</li>
                  <li>Bootstrap Jumbotron</li>
                  <li>Bootstrap Cards</li>
              </ul>
              <br></br>
                <a href='https://gmusita30.github.io/reactjscss03072022/' target="_blank"><button style={{width: "170px", height: "60px"}} class="glow-on-hover" type="button">View Deployed Project</button> </a>
              <div>
              <br></br>

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
                                <img src={Widtwpic4}/>
                            </div>
                            <div>
                                <img src={Widtwpic5}/>
                            </div>
                            
                        </Carousel>  
              </div>
              <div>
                <button style={{width: "70px", height: "40px"}} class="glow-on-hover" onClick={() => setModalIsOpen3(false)}>Close</button>
              </div>
            </Modal>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
