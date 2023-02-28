import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import { Header } from "./components/Header"
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Section />
        <Footer />
      </header>
    </div>
  );
}

export default App;
