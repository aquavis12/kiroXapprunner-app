import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h2>Your Name</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer creating amazing web experiences</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </header>
  );
};

export default Header;