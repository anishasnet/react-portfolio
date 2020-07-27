import React, { useState } from 'react';
import coverImage from '../assets/images/coverImage.jpg';
import About from './pages/About';
import Projects from './Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navigation from './Navigation';

function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');
    const renderPage = () => {
        switch(currentPage) {
        case 'About': 
        return (<About></About>)

        case 'Portfolio': 
        return (<Projects></Projects>)

        case 'Resume':
            return (<Resume></Resume>)

        case 'Contact': 
        return (<Contact></Contact>)

        default: 
        return(<About></About>)
    }
};

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