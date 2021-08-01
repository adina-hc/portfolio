// Import resources
import React from 'react'
import resumeDoc from '../../images/AH-Resume.pdf'

const Resume = () => {
    return (
        <div>
            <section id="resume"  class="resume">
            <div class="subtitle-resume subtitles">
                <h2>Resume</h2>
            </div>
            <article class="article-content">
                <iframe title="Display Resume" type="application/pdf" src={resumeDoc} style={{height: 620}} frameborder="0"></iframe>
            </article>
        </section>
        </div>
    )
}

export default Resume;
