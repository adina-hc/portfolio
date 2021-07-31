import React from 'react';
import obj from '../../seeds/projectData.json';

// Import images for projects
import pets from '../../images/happy-pets.png';
import sports from '../../images/sports-almanac.png';
import weather from '../../images/weather.png';
import assessment from '../../images/coding-assessment.png';



// Function to render Work section with project information
const Work = () => {

    return (
      <div>
        <h1>proj name{obj[0].name}</h1>
        <img src={pets} alt="pets"></img>
        <h1>proj name 2: {obj[1].name}</h1>

        <section id="work" className="work section">
          <div className="subtitle-work subtitles">
            <h2>Work</h2>
          </div>

          <section className="work-content section">
            <section className="row">
              <div className="sports-card">
                <div className="col s12">
                  <div className="card">
                    <div className="card-image">
                      <div>
                        <a
                          href={obj[0].deployWebsite}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img id="happyPets" src={pets} alt="" />
                        </a>
                        <span className="card-title">{obj[0].name}</span>
                      </div>
                    </div>
                    <div className="card-content">
                      <p>{obj[0].description}</p>
                    </div>
                    <div className="card-action">
                      <a href={obj[0].gitHubLink}>GitHub Repo</a>
                      <a href={obj[0].deployWebsite}>Deployed Project</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sports-card">
                <div className="col s12">
                  <div className="card">
                    <div className="card-image">
                      <div>
                        <a
                          href={obj[1].deployWebsite}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img id="sportsAlmanac" src={sports} alt="" />
                        </a>
                        <span className="card-title">{obj[1].name}</span>
                      </div>
                      <div className="card-content">
                        <p>{obj[1].description}</p>
                      </div>
                      <div className="card-action">
                        <a href={obj[1].gitHubLink}>GitHub Repo</a>
                        <a href={obj[1].deployWebsite}>Deployed Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="onNameeLine row">
              <div className=" weather-card">
                <div className="col s6 newContainer">
                  <div className="card">
                    <div className="card-image">
                      <a
                        href={obj[2].deployWebsite}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img id="weatherApp" src={weather} alt="" />
                      </a>
                      <span className="card-title">{obj[2].name}</span>
                    </div>
                    <div className="card-content">
                      <p>{obj[2].description}</p>
                    </div>
                    <div className="card-action">
                      <a href={obj[2].gitHubLink}>GitHub Repo</a>
                      <a href={obj[2].deployWebsite}>Deployed Project</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" coding-card">
                <div className="col s6 ">
                  <div className="card">
                    <div className="card-image">
                      <a
                        href={obj[3].deployWebsite}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img id="codingTest" src={assessment} alt="" />
                      </a>
                      <span className="card-title">{obj[3].name}</span>
                    </div>
                    <div className="card-content">
                      <p>{obj[3].description}</p>
                    </div>
                    <div className="card-action">
                      <a href={obj[3].gitHubLink}>GitHub Repo</a>
                      <a href={obj[3].deployWebsite}>Deployed Project</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    );
};

export default Work;
