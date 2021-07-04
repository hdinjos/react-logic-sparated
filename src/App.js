import { useState, createContext, useContext } from "react";
import QualitySelector from "./pages/QualitySelector"; //spareated logic and view
import StyledComponent from "./pages/StyledComponent";
import RenderContext from "./pages/RenderContext";

export const CounterContext = createContext(0);
export const useCounterContext = () => useContext(CounterContext);
function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((value) => value + 1);

  return (
    <CounterContext.Provider value={{ counter, increment }}>
      <QualitySelector />
    </CounterContext.Provider>
  );
}

export default App;
