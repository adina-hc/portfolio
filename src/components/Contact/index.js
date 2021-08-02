import React from 'react';

// Import contact template
import ContactForm from '../../components/Contact/contactForm';

// Import images
import phone from '../../images/blue-phone.png';
import gMail from '../../images/gmail-transparent.png';
import gitHub from '../../images/gitHub-32px.png';
import linkedIn from '../../images/linkedIn-logo.png';
import faceBook from '../../images/fb-logo-58.png';

const Contact = () => {
    return (
      <>
        <div>
          <section id="contact-me" className="contact-me">
            <div className="subtitle-contact subtitles">
              <h2>Contact</h2>
            </div>
            <div className="form-logos">
              <ContactForm />
              <ul className="contact-information">
                <li>
                  <a href="(513)512-5663" target="_blank">
                    <img
                      src={phone}
                      alt="Call Number"
                      className="resize-phone"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: ahenderson.career@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={gMail} alt="Send eMail" className="resize-mail" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/adina-hc"
                    target="_blank"
                    rel="noreferrer"
                    className="external"
                  >
                    <img
                      src={gitHub}
                      alt="Got to GitHub"
                      className="resize-git"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/adinahenderson/"
                    target="_blank"
                    rel="noreferrer"
                    className="external"
                  >
                    <img
                      src={linkedIn}
                      alt="Go to LinkedIn"
                      className="resize-lnk"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/ahenderson.career"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={faceBook}
                      alt="Go to Facebook"
                      className="resize-fb"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </section>
          
        </div>
      </>
    );
};

export default Contact;
