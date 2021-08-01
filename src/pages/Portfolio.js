// Import resources
import React from 'react';
import Header from '../components/Header/index';
import About from '../components/About/index';
import Work from '../components/Work/index';
import Resume from '../components/Resume/index';
import Contact from '../components/Contact/index';
import 'materialize-css/dist/css/materialize.min.css';
import '../'

const Portfolio = () => {
  return (
    <>
      <Header />
      <About />
      <Work />
      <Resume />
      <Contact />
    
    </>
  )
}

export default Portfolio;
