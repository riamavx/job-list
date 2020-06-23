import React from 'react';
import  Home from './pages/Home/Home'
import './App.css';
import data from "./data.json"

function App() {
  return (
    <div className="App">
      <Home data={data}/>
    </div>
  );
}

export default App;
