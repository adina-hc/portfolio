// Import resources
import React from 'react';
import profilePic from '../../images/adina-portfolio.JPG';

const NavElements = () => {
  return (
    <div>
     <header>
        <div className="banner">
            <img className="profile-picture" src={profilePic} alt=""></img>
            <div className="developer-name">
                <h1>Adina Henderson</h1>
            </div>
            <nav>
                <ul className="nav-bar">
                    <li className="tab-about"><a href="#about-me">About me</a></li>
                    <li className="tab-work"><a href="#work">Work</a></li>
                    <li className="tab-resume"><a href="#resume">Resume</a></li>
                    <li className="tab-contact"><a href="#contact-me">Contact me</a></li>
                </ul>
            </nav>
        </div>
     </header>
    
    </div>
  )
}

export default NavElements;


