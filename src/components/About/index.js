import React from 'react';
import profilePic from "../../images/adina-portfolio.JPG";
import bgPic from "../../images/hero.png"
import Footer from "../Footer"


// Import style
import '../../reset.css'
import '../../style.css';
import '../../fix-materialize.css'

function About() {
    return (
      <>
        <div
          className="bgImage"
          style={{ backgroundImage: `url(${bgPic})` }}
        ></div>
        <section id="about-me" className="about-me">
          <div className=" subtitle">
            <h2 className="subtitle-about-me subtitles"> </h2>
          </div>
          <div className="center-div">
            <h1 className="developer-name">Adina Henderson</h1>
            <img className="profile-picture" src={profilePic} alt=""></img>
            <div className="article-container">
              <article className="article-content">
                <p>
                  Educated at Tecnologico de Monterrey
                  <br />
                  Worked with HTML, CSS, JavaScript, among other technologies.{" "}
                  <br />
                  <br />
                  Passionate about database and software design, data analysis,
                  quality assurance, etc.
                  <br />
                  Recently worked in diverse projects including different
                  technologies: MERN, React, Databases (SQL and NoSQL), node.js,
                  JavaScript, among others.
                  <br />
                  <br />
                  Coming from a Business, Accounting & Auditing, Finance and
                  Consulting background, I am eager to leap into the Technology
                  field. I love challenge, learning, languages, music, and
                  dance.
                </p>
              </article>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
}

export default About;
