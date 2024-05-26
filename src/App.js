import { useState } from "react";
import "./styles.css";

export default function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [amt, setAmt] = useState(0);

  //P(r(1+r)^n/((1+r)^n)-1))
  const calAmoumt = () => {
    let r = rate;
    if (principle && r && time) {
      r = r / 12 / 100;
      const calcpow = Math.pow(1 + r, time * 12);
      const amount = principle * ((r * calcpow) / (calcpow - 1));
      setAmt(Math.round(amount));
    }
  };
  const handleInput = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "principle") {
      setPrinciple(value);
    } else if (id === "rate") {
      setRate(value);
    } else {
      setTime(value);
    }
  };
  return (
    <div className="App">
      <h1>Mortgage Calculator</h1>
      <div className="cal-container">
        <div className="input-box">
          <p>Principle loan amount</p>
          <input type="number" id="principle" onChange={handleInput} required />
          <p>Interest rate</p>
          <input type="number" id="rate" onChange={handleInput} required />
          <p>Length of loan</p>
          <input type="number" id="time" onChange={handleInput} required />
          <div>
            <button onClick={calAmoumt}>Calculate</button>
          </div>
        </div>
        <div className="ans-box">
          Your monthly mortgage payment will be $ {amt}
        </div>
      </div>
    </div>
  );
}
