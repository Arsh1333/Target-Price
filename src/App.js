import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="tpc-calc">
        <form className="calc-form">
          <label>Enter Current Price:</label>
          <input type="number" />
          <label>Enter Current PE ratio:</label>
          <input type="number" />
          <label>Enter Forward PE ratio:</label>
          <input type="number" />
          <button className="btn">Target Price</button>
        </form>
      </div>
    </div>
  );
}

export default App;
