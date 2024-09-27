import React from 'react';
import { LanguageProvider } from './LanguageContext';
import TranslatedMessage from './TranslatedMessage';
import LanguageSwitcher from './LanguageSwitcher';

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <h1>Multilingual App</h1>
        <LanguageSwitcher />
        <TranslatedMessage />
      </div>
    </LanguageProvider>
  );
};

export default App;
