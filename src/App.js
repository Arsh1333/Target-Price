import "./App.css";
import { useState } from "react";

function App() {
  const [cp, setCp] = useState("");
  const [pe, setPe] = useState("");
  const [fpe, setFpe] = useState("");
  const [displayedAns, setDisplayedAns] = useState("");
  const [eps, setEps] = useState("");
  const [displayedEpsAns, setDisplayedEpsAns] = useState("");

  const cpHandler = (e) => {
    setCp(e.target.value);
  };
  const peHandler = (e) => {
    setPe(e.target.value);
  };
  const fpeHandler = (e) => {
    setFpe(e.target.value);
  };
  const epsHandler = (e) => {
    setEps(e.target.value);
  };
  let epsAns = 0;
  let ans = 0;
  const handleDisplayButtonClick = (e) => {
    e.preventDefault();
    ans = (cp * pe) / fpe;
    //alert(`Target Price : ${ans}`);
    setDisplayedAns(`The terget price for given stock: ${ans}`);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    epsAns = cp / eps;
    //alert(epsAns);
    setDisplayedEpsAns(`The EPS for given stock: ${epsAns}`);
  };
  return (
    <div className="App">
      <div className="tpc-calc">
        <h1 className="ans">TARGET PRICE CALCULATOR</h1>
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
        <p className="ans">{displayedAns}</p>

        <h1 className="ans">FORWARD PE CALCULATOR</h1>

        <form className="fpe-form">
          <label>Enter Current Price:</label>
          <input type="number" onChange={cpHandler} />
          <label>Enter Current EPS:</label>
          <input type="number" onChange={epsHandler} />
          <button className="btn" onClick={handleButtonClick}>
            Forward PE
          </button>
        </form>
        <p className="ans">{displayedEpsAns}</p>
      </div>
    </div>
  );
}

export default App;
