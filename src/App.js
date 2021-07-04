import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/MainWithClass";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("red");
  const onClickHandler = () => {
    setTheme(theme === "red" ? "blue" : "red");
  };

  const themeHook = useState("light");

  return (
    <div>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Header />
          <Main />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

function Text({ theme }) {
  return (
    <div>
      <h1 style={{ color: `${theme}` }}>{theme}</h1>
    </div>
  );
}

export default App;
