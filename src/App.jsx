import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <h3>Hello World!</h3>
      <button className={buttonColor} onClick={() => setButtonColor(nextColor)} disabled={disabled} >Change to {nextColor}</button>
      <br />
      <input type="checkbox" id="disable-button" defaultChecked={disabled} onChange={() => setDisabled(!disabled)}/>
      <label htmlFor="disable-button">Disable Button</label>
    </div>
  );
}

export default App;
