import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);
  const [toChecked, setToChecked] = useState(false);

  const checkBoxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <div>
      <h3>Hello World!</h3>
      <button
        className={buttonColor}
        onClick={() => setButtonColor(nextColor)}
        disabled={disabled}
      >
        Change to {nextColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button"
        defaultChecked={disabled}
        onChange={() => setDisabled(!disabled)}
      />
      <label htmlFor="disable-button">Disable Button</label>
     <h3>Order Summary</h3>
      <Form>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            onChange={(e) => setToChecked(e.target.checked)}
            label={checkBoxLabel}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!toChecked}>
          Confirm Order
        </Button>
      </Form>
    </div>
  );
}

export default App;
