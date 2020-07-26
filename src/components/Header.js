import React, { useState } from 'react';
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
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;