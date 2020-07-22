import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Header />
      <div className="calculator">
        <div className="calculate">
          <div className="btnBox">
            {counter !== 0 && (
              <Decrement value={counter} decrement={setCounter} />
            )}
          </div>
          <div className="result">{counter}</div>
          <div className="btnBox">
            {counter <= 9 && (
              <Increment value={counter} increment={setCounter} />
            )}
          </div>
        </div>
        <Reset value={counter} reset={setCounter} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
