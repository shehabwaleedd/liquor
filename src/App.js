import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import MainNav from './nav/mainNav/MainNav';
import Main from './page/main/Main';


function App() {
  return (
    <div className="App">
      <MainNav />
      <Main />
    </div>
  );
}

export default App;
