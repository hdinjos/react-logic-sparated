import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("red");
  const onClickHandler = () => {
    setTheme(theme === "red" ? "blue" : "red");
  };

  return (
    <div>
      <Text theme={theme} />
      <h1>{theme}</h1>
      <button onClick={() => onClickHandler()}>Change Theme</button>
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
