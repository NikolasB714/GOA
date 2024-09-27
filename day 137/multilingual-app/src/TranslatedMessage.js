import React from 'react';
import { useLanguage } from './LanguageContext';

const messages = {
  en: 'Hello, World!',
  es: '¡Hola, Mundo!',
  fr: 'Bonjour, le monde!',
  de: 'Hallo, Welt!'
};

const TranslatedMessage = () => {
  const { language } = useLanguage();

  return <p>{messages[language]}</p>;
};

export default TranslatedMessage;
