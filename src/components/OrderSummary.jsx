import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function OrderSummary() {
  const [toChecked, setToChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>no ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkBoxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue", cursor: "pointer" }}>
          Terms and Conditions
        </span>
      </OverlayTrigger>
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
