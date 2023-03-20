import React from 'react';
import './App.css';
import Block from './Block';
import Button from './Button';
import LangButton from './LangButton';

export type IContext = {
    theme: string;
    lang: string;
    text: string;
    handleClick: () => void
    switchLang: () => void 
}
export const MyContext = React.createContext<IContext | null>(null)

function App() {
  const [theme, setTheme] = React.useState("dark")
  const [lang, setLang] = React.useState('ru')
  const [text, setText] = React.useState("Привет")
  const handleClick = () => {
    if(theme === "dark") {
      setTheme("light")
    } 
    if (theme === "light") {
      setTheme("dark")
    } 
  }

  const switchLang = () => {
    if(lang === "ru") {
      setLang("kz")
      setText("Сәлем")
    } else {
      setTheme("ru")
      setText("Привет")
    } 
  }

  return (
    <div className="App">
      <header className="App-header">
        <MyContext.Provider value={{theme, handleClick, switchLang, lang, text}}>
          <Block>
            <Button />
            <LangButton />
          </Block>
        </MyContext.Provider>
      </header>
    </div>
  );
}

export default App;
