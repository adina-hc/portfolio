// Import resources
import React from 'react';

// To render header
const Header = () => {
  return (
    <header>
      <div id="goTop" className="">
        {/* <div className="toggle-btn"> */}
          {/* <span />
          <span />
          <span />
          <span />
        </div> */}
        <nav id="nav" className="nav">
          <ul className="nav-bar">
            <li className="tab-about">
              <a href="#goTop">About me</a>
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
            {/* <li className="tab-top">
              <a href="#goTop">Top</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


