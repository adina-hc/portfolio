import React from 'react';

function NavElements({ presentPage, switchPage }) {
    return (
      <nav>
        <ul class="nav-bar">
          <li class="tab-about">
            <a
              href="#about-me"
              onClick={() => switchPage("Home")}
              className={
                presentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li class="tab-about">
            <a
              href="#about-me"
              onClick={() => switchPage("About")}
              className={
                presentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About me
            </a>
          </li>
          <li class="tab-work">
            <a
              href="#work"
              onClick={() => switchPage("Work")}
              className={
                presentPage === "Work" ? "nav-link active" : "nav-link"
              }
            >
              Work
            </a>
          </li>
          <li class="tab-resume">
            <a
              href="#resume"
              onClick={() => switchPage("Resume")}
              className={
                presentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li class="tab-contact">
            <a
              href="#contact-me"
              onClick={() => switchPage("Contact")}
              className={
                presentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default NavElements;