import React, { useState, useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  useEffect(() => {
    // I need something to pass darkmode up to the App component
    // I would normally move darkMode state up to the App, but
    // the mvp says to leave it here, and I like a challenge.
    props.setAppDarkMode(darkMode);
  },[darkMode]);
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
