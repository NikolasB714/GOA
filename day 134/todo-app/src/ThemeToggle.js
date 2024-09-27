import React from 'react';
import useDarkMode from './useDarkMode';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
