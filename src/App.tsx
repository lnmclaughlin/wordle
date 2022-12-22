import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Wordle from "./components/Wordle";
import useLocalStorage from "use-local-storage";
import Keyboard from "./components/Keyboard";
import word from "./db/Word";

function App() {
  const [wordOfTheDay, setWordOfTheDay] = useState("");
  const defaultDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
  const [theme, setTheme] = useLocalStorage(
    `theme`,
    defaultDark ? `dark` : `light`
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const getWordOFTheDay = () => {
    return word[Math.floor(Math.random() * word.length)];
  };
  useEffect(() => {
    setWordOfTheDay(getWordOFTheDay());
  }, []);

  return (
    <div className="App" data-theme={theme}>
      <button className="theme" onClick={switchTheme}>
        {theme}
      </button>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Wordle puzzleWord={wordOfTheDay} />} />
        </Routes>
        <Keyboard />
      </Router>
    </div>
  );
}

export default App;
