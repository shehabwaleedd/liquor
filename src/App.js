import React from 'react';
import './App.css';
import MainNav from './nav/mainNav/MainNav';
import Main from './page/main/Main';
import Welcome from './page/main/welcome/Welcome';
import TopPicks from './component/topPicks/TopPicks';
import Promotions from './page/main/promotions/Promotions';


function App() {
  return (
    <div className="App">
      <MainNav />
      <Main />
      <Welcome />
      <Promotions />
      <TopPicks />
    </div>
  );
}

export default App;
