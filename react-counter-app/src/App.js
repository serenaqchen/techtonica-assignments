import "./App.css";
import React, { useState } from "react";

function App(prop) {
  let [count, setCount] = useState(prop.number);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function clear() {
    setCount(prop.number);
  }

  function half() {
    setCount((prevCount) => prevCount / 2);
  }

  function double() {
    setCount((prevCount) => prevCount * 2);
  }

  function addNumber2() {
    setCount((prevCount) => prevCount + prop.number2);
  }

  function subtractNumber2() {
    setCount((prevCount) => prevCount - prop.number2);
  }

  return (
    <div className="App">
      <div className="buttons">
        <button className="style" onClick={subtractNumber2}>
          Subtract {prop.number2}
        </button>
        <button className="half" onClick={half}>
          half
        </button>
        <button className="decrement" onClick={decrement}>
          -
        </button>
        <p>{count}</p>
        <button className="increment" onClick={increment}>
          +
        </button>
        <button className="double" onClick={double}>
          double
        </button>
        <button className="addNumber2" onClick={addNumber2}>
          Add {prop.number2}
        </button>
      </div>
      <div className="clearButton">
        <button className="clear" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
