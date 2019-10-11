import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/logo-tiki.png';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <a href="https://ticketbox.vn/">
          <img src={Banner} alt="Tiki - Logo" />
        </a>
       </div>
    );
  }
}

export default Header;
