import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode'

const Navbar = (props) => {
  const [theme, setTheme] = useDarkMode('dark-mode')
  const toggleMode = e => {
    e.preventDefault();
    setTheme(!theme)
    props.setDarkMode(!props.darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
