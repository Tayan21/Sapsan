





import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import { Card } from './components/Card';
import LangSettings from './components/LangSettings';

function App() {
  const [lang, setLang] = useState<string>("ru")
  const [banner, setBanner] = useState<string>("Добро пожаловать")
  const [collapsedCard, setCollapsedCard] = React.useState<number>()
  

  const selectLang = () => {
    if(lang === "ru") {
      setLang("kz")
      setBanner("Қош келдіңіз")
    } else {
      setLang("ru")
      setBanner("Добро пожаловать")
    }
  }

  return (
    <div className="App">
      <Banner title={banner}/>
      <LangSettings changeLang={selectLang}  lang={lang}/>
      <Card title = 'Card1' collapsed={collapsedCard === 1} onCardClick={() => setCollapsedCard(1)}/>
      <Card title = 'Card2' collapsed={collapsedCard === 2} onCardClick={() => setCollapsedCard(2)}/>
    </div>
  );
}

export default App;
