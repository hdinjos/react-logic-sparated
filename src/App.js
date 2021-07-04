import { useState } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("red");
  const onClickHandler = () => {
    setTheme(theme === "red" ? "blue" : "red");
  };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <div></div>
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
