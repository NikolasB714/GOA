import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeDisplay from './ThemeDisplay';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Context Example</h1>
        <ThemeDisplay />
      </div>
    </ThemeProvider>
  );
};

export default App;
