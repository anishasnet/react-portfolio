import React from 'react';

function Navigation(props) {
  const tabs = ['About Me', 'Portfolio', 'Resume', 'Contact'];
  return (
    <ul className="nav ">
      {tabs.map(tab => (
        <li className="" key={tab}>
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
