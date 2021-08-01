// Import resources
import React from 'react';
import profilePic from '../../images/adina-portfolio.JPG';

const Header = () => {
  return (
    <header>
      <div id="goTop" className="banner">
        <div>
          <img className="profile-picture" src={profilePic} alt=""></img>
          <h1 className="developer-name">Adina Henderson</h1>
        </div>

        <nav>
          <ul className="nav-bar">
            <li className="tab-about">
              <a href="#about-me">About me</a>
            </li>
            <li className="tab-work">
              <a href="#work">Work</a>
            </li>
            <li className="tab-resume">
              <a href="#resume">Resume</a>
            </li>
            <li className="tab-contact">
              <a href="#contact-me">Contact me</a>
            </li>
            <li className="tab-top">
              <a href="#goTop">Top</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


