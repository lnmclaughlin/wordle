import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Wordle from "./components/Wordle";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
  const [theme, setTheme] = useLocalStorage(
    `theme`,
    defaultDark ? `dark` : `light`
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <button className="theme" onClick={switchTheme}>
        {theme}
      </button>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Wordle puzzleWord="dream" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
