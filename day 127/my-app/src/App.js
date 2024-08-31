import React from 'react';
import FormComponent from './FormComponent';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold">User Information Form</h1>
      </header>
      <main>
        <FormComponent />
      </main>
    </div>
  );
}

export default App;
