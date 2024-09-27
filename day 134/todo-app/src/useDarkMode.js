import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const useDarkMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return [theme, toggleTheme];
};

export default useDarkMode;
