import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";

function OrderSummary() {
  const [toChecked, setToChecked] = useState(false);

  const checkBoxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <div>
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

export default OrderSummary;
