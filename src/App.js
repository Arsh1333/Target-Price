import "./App.css";
import { useState } from "react";

function App() {
  const [cp, setCp] = useState("");
  const [displayedCp, setDisplayedCp] = useState("");
  const [pe, setPe] = useState("");
  const [displayedPe, setDisplayedPe] = useState("");
  const [fpe, setFpe] = useState("");
  const [displayedFpe, setDisplayedFpe] = useState("");

  const cpHandler = (e) => {
    setCp(e.target.value);
  };
  const peHandler = (e) => {
    setPe(e.target.value);
  };
  const fpeHandler = (e) => {
    setFpe(e.target.value);
  };
  let ans = 0;
  const handleDisplayButtonClick = (e) => {
    e.preventDefault();
    ans = (cp * pe) / fpe;
    alert(`Target Price : ${ans}`);
  };
  return (
    <div className="App">
      <div className="tpc-calc">
        <form className="calc-form">
          <label>Enter Current Price:</label>
          <input type="number" onChange={cpHandler} />
          <label>Enter Current PE ratio:</label>
          <input type="number" onChange={peHandler} />
          <label>Enter Forward PE ratio:</label>
          <input type="number" onChange={fpeHandler} />
          <button className="btn" onClick={handleDisplayButtonClick}>
            Target Price
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
