import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src="./img/burger.png"/>
        <img src="./img/combo.png"/>
        <img src="./img/dessert.png"/>
        <img src="./img/hot-dog.png"/>
        <img src="./img/pizza.png"/>
        <h1>Hello</h1>
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}

export default App;
