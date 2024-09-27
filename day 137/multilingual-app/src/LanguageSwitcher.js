import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('es')}>Español</button>
      <button onClick={() => switchLanguage('fr')}>Français</button>
      <button onClick={() => switchLanguage('de')}>Deutsch</button>
    </div>
  );
};

export default LanguageSwitcher;
