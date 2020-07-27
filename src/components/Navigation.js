import React from 'react';

//nav bar has about me, portfolio, resume, contact tabs
function Navigation(props) {
  const tabs = ['About Me', 'Portfolio', 'Resume', 'Contact'];
  return (
    <ul className="nav-ul">
      {tabs.map(tab => (
        <li className='nav-li' key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default Navigation;
