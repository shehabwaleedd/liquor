import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import MainNav from './nav/mainNav/MainNav';


function App() {
  return (
    <div className="App">
      <MainNav />
    </div>
  );
}

export default App;
