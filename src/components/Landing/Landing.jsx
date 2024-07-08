import React from "react";
import "./Landing.css";
import BgVideo from "./landing.webm";
import logo from "./logo.png";
  
const Landing = () => {
  return (
    <div className="landingPageRoot">
        <video id="landing-background-animation" autoPlay loop muted>
            <source src={BgVideo} type="video/mp4"/>
        </video>
        <div className="landingPageContainer">
            <div className="navCont">
                <img src={logo} alt="Pitch-A-Thon '24" className="logoMain" />
                <div className="navBar">
                    <a href="#">Organizers</a>
                    <a href="#">Themes</a>
                    <a href="#section-timeline">Timeline</a>
                    <a href="#section-prizes">Prizes</a>
                    <a href="#section-team">Team</a>
                    <a href="https://api.whatsapp.com/send?phone=919830659998" target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/pitchathon.vitc/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="heroSection">
                <h1>Pitch-A-Thon</h1>
                <p>A two day hackathon style event for brilliant minds to pitch their exciting ideas 
                    <br />in a platform and win exciting cash prizes and further recognition!</p>
                <div className="heroLinks">
                    <a className="heroLink" id="projLink" href="#" target="_blank" rel="noreferrer">
                        <i class="fas fa-database"></i>
                        <p>Go to Projects</p>
                    </a>
                    <a className="heroLink" id="discordLink" href="#" target="_blank" rel="noreferrer">
                        <i class="fab fa-discord"></i>
                        <p>Join us on Discord</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Landing;