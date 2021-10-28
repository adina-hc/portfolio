// Import resources
import React from 'react'
import resumeDoc from '../../images/AH-Resume.pdf'
import Footer from '../Footer';


const Resume = () => {
    return (
      <div>
        <section id="resume" className="resume">
          <div className="subtitle-resume subtitles">
            <h2>Resume</h2>
          </div>
          <div className="article-content">
            <article className="article-content-resume">
              <iframe
                title="Display Resume"
                type="application/pdf"
                src={resumeDoc}
                style={{ height: 620 }}
                frameBorder="0"
              ></iframe>
            </article>
          </div>
        </section>
        <Footer />
      </div>
    );
}

export default Resume;
