import React, { useState } from 'react';
import coverImage from '../assets/images/coverImage.jpg';
//import each tab + nav bar
import About from './pages/About';
import Projects from './Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navigation from './Navigation';

//based on link clicked, render correct page
function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');
    const renderPage = () => {
        //about
        switch(currentPage) {
        case 'About': 
        return (<About></About>)
        //portfolio
        case 'Portfolio': 
        return (<Projects></Projects>)
        //resume
        case 'Resume':
            return (<Resume></Resume>)
        //contact
        case 'Contact': 
        return (<Contact></Contact>)
        //default = about
        default: 
        return(<About></About>)
    }
};

// always show nav bar + name
return (
    <div>
      <div className="container">
        <img src={coverImage} className="hero"  alt="cover" />
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        <h1 id="about">Anisha Sinha</h1>
      </div>
      <div>
        {
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;