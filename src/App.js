import React from 'react';
import './App.css';
import Title from './components/Title';
import Search from './components/Search/Search';
import Tabs from './components/Tabs/Tabs';

function App() {
  return (
    <div className="App" style={{paddingLeft:5, paddingRight: 5}}>
      <header>
      <Title />
      </header>
      <Search />
      <div >
      <Tabs />
      </div>

      
    </div>
  );
}

export default App;
