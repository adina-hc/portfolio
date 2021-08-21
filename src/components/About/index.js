import React from 'react';
import profilePic from "../../images/adina-portfolio.JPG";
import backGPic from '../../images/matrix.jpg';
import Footer from '../Footer/index';

// Import style
import '../../reset.css'
import '../../style.css';
import '../../fix-materialize.css'

function About() {
    return (
      <>
        <div style={{ backgroundImage: `url(${backGPic})` }}>
          <section id="about-me" class="about-me">
            <div className=" subtitle">
              <h2 className="subtitle-about-me subtitles"> </h2>
            </div>
            <div className="center-div">
              <h1 className="developer-name">Adina Henderson</h1>
              <img className="profile-picture" src={profilePic} alt=""></img>

              <article class="article-content">
                <p>
                  Full Stack Web Developer in the making. Currently a student of
                  Tecnologico de Monterrey's Bootcamp and soon to graduate with
                  a Certificate. Web technologies include JavaScript, CSS, HTML,
                  REACT, databases mySQL and Mongo.

                  My passion is automation, being able to create quality solutions to simplify and optimize time and efforts.
                <br/>
                  Coming from a Business, Accounting & Auditing, Finance and
                  Consulting background, I am eager to leap into the Technology field.
                  I love challenge, languages, music and dance.
                </p>
              </article>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
}

export default About;
