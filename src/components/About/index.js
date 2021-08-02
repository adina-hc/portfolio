import React from 'react';
import profilePic from "../../images/adina-portfolio.JPG";

// Import style
import '../../reset.css'
import '../../style.css';
import '../../fix-materialize.css'

function About() {
    return (
      <div>
        <section id="about-me" class="about-me">
          <div class="subtitle-about-me subtitles">
            <h2>About Me</h2>
          </div>
          <div className="center-div">
            <h1 className="developer-name">Adina Henderson</h1>
            <img className="profile-picture" src={profilePic} alt=""></img>

            <article class="article-content">
              <p>
                {" "}
                Full Stack Web Developer in the making. Currently a student of
                Tecnologico de Monterrey's Full Stack Web Development Bootcamp.
                Coming from a Business, Accounting & Auditing, Finance and
                Consulting background, I am interested and preparing for a
                career change. I love challenge, languages, music and dance.
              </p>
            </article>
          </div>
        </section>
      </div>
    );
}

export default About;
