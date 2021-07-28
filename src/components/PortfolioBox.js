import React, {useState} from 'react';
import Home from '../components/pages/Home';
import NavElements from './NavElements';
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioBox() {
    const [presentPage, setPresentPage] = useState('Home')


// Depending on the current page value, the page will be displayed

    const displayPage = () => {
        if(presentPage === 'Home') {
            return <Home />;
        }
        if (presentPage === 'About') {
            return <About />;
        }
        if (presentPage === 'Work') {
            return <Work />;
        }
        if (presentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
        
    };

    const switchPage = (page) => setCurrentPage(page);

    return (
        <div>      
            {/* Pass present page from state and update function */}
            <NavElements currentPage = {presentPage} switchPage = {switchPage}
            {/* Call renderPage method to return a component */}
            {displayPage()}
        </div>
    );
}