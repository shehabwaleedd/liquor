import React from 'react';
import './App.css';
import MainNav from './nav/mainNav/MainNav';
import Main from './page/main/Main';
import Welcome from './page/main/welcome/Welcome';


function App() {
  return (
    <div className="App">
      <MainNav />
      <Main />
      <Welcome />
    </div>
  );
}

export default App;
