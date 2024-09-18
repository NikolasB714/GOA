import React from 'react';
import ThemeToggler from './components/ThemeToggler';
import UserInfo from './components/UserInfo';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';
import LanguageSelector from './components/LanguageSelector';

const App = () => {
  return (
    <div>
      <ThemeToggler />
      <UserInfo />
      <UserForm />
      <Dashboard />
      <LanguageSelector />
    </div>
  );
};

export default App;