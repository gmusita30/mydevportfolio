import React from 'react'
import '../../Remindmed.css';
import ScrollToTop from "react-scroll-to-top";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Remindmed from "../../assets/remindmed.png";
import Remindmed0 from "../../assets/remindmed0.png";
import Remindmed1 from "../../assets/remindmed1.png";
import Remindmed2 from "../../assets/remindmed2.png";
import Remindmed3 from "../../assets/remindmed3.png";
import Remindmed4 from "../../assets/remindmed4.png";
import Remindmed5 from "../../assets/remindmed5.png";
import Remindmed6 from "../../assets/remindmed6.png";
import Remindmed8 from "../../assets/remindmed8.png";
import Remindmed9 from "../../assets/remindmed9.png";
import Remindmed11 from "../../assets/remindmed11.png";
import Remindmed12 from "../../assets/remindmed12.png";
import Remindmed14 from "../../assets/remindmed14.png";



const RemindMed = () => {
    return(
        <>
        <ScrollToTop smooth />
        <div className="project component__space" id="widtw">
        <div className="container">
          <div className="row">
            
            <div className="colProj__2">
              <h1 className="project__heading">RemindMed Mobile Application</h1>
              <div className="project__meta">
                <p className="project__text">
                  This project was a requirement for us in our Capstone I & II course when we are in our Special term and 4th year in college. The purpose of this project is to provide a mobile application that would assist older adults or senior citizens to keep track of their medications and help in reminding them to take their medicine as prescribed by their doctors. The application aims to help people who tend to forget to properly take their medication on-time, especially for people who have chronic diseases and the elderly. Using the OCR technology and text to speech, the application is also designed to help a wide range of users, especially for people of old age and outpatients who have poor or deteriorating eyesight in determining the medication they will be taking. 

                </p>
                <br></br>
                <h1 className="project__heading">Technologies Used</h1>
                <ul className="list">
                  <li>Java</li>
                  <li>XML</li>
                  <li>Google Vision API</li>
                  <li>Firebase/Firestore</li>
                  <li>Android Studio IDE</li>
                </ul>
                <br></br>

                <h1 className="project__heading">Features</h1>
                <ul className="list">
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
            <Carousel className="main-slide-remindmed">

                    <div>
                        <img src={Remindmed}  />
                    </div>
                    <div>
                        <img src={Remindmed0}  />
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
                        <img src={Remindmed4} />
                    </div>
                    <div>
                        <img src={Remindmed5} />
                    </div>
                    <div>
                        <img src={Remindmed6} />
                    </div>
        
                    <div>
                        <img src={Remindmed8} />
                    </div>
                    <div>
                        <img src={Remindmed9} />
                    </div>
        
                    <div>
                        <img src={Remindmed11} />
                    </div>
                    <div>
                        <img src={Remindmed12}  />
                    </div>
     
                    <div>
                        <img src={Remindmed14}  />
                    </div>
  
                </Carousel>  
            </div>
        </div>
        
        </div>
        </>
    )
}


export default RemindMed