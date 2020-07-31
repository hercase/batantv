import React from 'react';

import logo from 'assets/images/logo.png';
import live from 'assets/images/live.svg'

import { Link } from 'react-router-dom';
import './style.sass';

const HeaderComponent = () => {
  return (
    <section className="header">
      <div className="header-container">
      <Link to="/" className="logo-container">
        <img alt="logo" className="logo" src={logo} />
        <img alt="live" className="live pulse" src={live} />
      </Link>
      </div>
    </section>
  );
}

export default HeaderComponent;