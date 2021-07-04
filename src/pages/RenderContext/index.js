import { useCounterContext } from "../../App";
const RenderContext = () => {
  const { counter, increment } = useCounterContext();
  return (
    <div style={{ border: "1px solid blue" }}>
      <p>Context section</p>
      <h1>{counter}</h1>
      <button onClick={() => increment()}>increment</button>
    </div>
  );
};

export default RenderContext;

// import React from "react";

// const CounterContext = React.createContext(0);

// const ParentComponent = () => {
//   const [counter, setCounter] = React.useState(0);

//   const increment = () => setCounter((value) => value + 1);

//   return (
//     <CounterContext.Provider value={{ counter, increment }}>
//       <ChildComponent />
//     </CounterContext.Provider>
//   );
// };

// const ChildComponent = () => {
//   // const { counter, increment } = React.useContext(CounterContext);

//   return (
//     <div>
//       <CounterContext.Consumer>
//         {(value) => (
//           <div>
//             <h1>{value.counter}</h1>
//             <button onClick={() => value.increment()}>Increment</button>
//           </div>
//         )}
//       </CounterContext.Consumer>
//       {/* <button onClick={() => increment()}>Increment</button>
//       <h1>{counter}</h1> */}
//     </div>
//   );
// };

// export default ParentComponent;
