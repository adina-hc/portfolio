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
                  Full stack web developer educated at Tec de Monterrey. Well
                  versed with HTML, CSS, JavaScript, among other technologies.
                  Proven staff management, as well as project management and
                  development abilities, excellent interpersonal and
                  communication skills. Passionate about database design. Highly
                  successful in collaborative environments, while independently
                  working, adaptable to change, problem solver, highly
                  motivated, organized, and passionate about software design and
                  development, data analysis, quality assurance, etc. Fluent in
                  English and Spanish. Recently worked in diverse projects
                  including different technologies: MERN, React, Databases (mySQL
                  and NoSQL), Mongo, node.js, JavaScript, among others.
                  <br />
                  Coming from a Business, Accounting & Auditing, Finance and
                  Consulting background, I am eager to leap into the Technology
                  field. I love challenge, languages, music and dance.
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
