import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

// eslint-disable-next-line no-undef
test(("should have hello world"), () => {
    render(<App />);
   const message = screen.queryByText(/Hello World!/);
   expect(message).toBeVisible();
});

// eslint-disable-next-line no-undef
test(("button starts with correct label and color"), () => {
    render(<App />);
    const buttonElement = screen.getByRole("button", {name: /blue/i});
    expect(buttonElement).toHaveClass("red");
});

// eslint-disable-next-line no-undef
test(("button click flow"), () => {
     // render
    render(<App />);
   // find the button
    const buttonElement = screen.getByRole("button", {name: /blue/i});
    // Click the button
    fireEvent.click(buttonElement);

    // check button text
    expect(buttonElement).toHaveTextContent(/red/i)

    //check the button color
    expect(buttonElement).toHaveClass("blue");
  // expect(buttonElement).toHaveStyle({"background-color": "blue"})
})

// eslint-disable-next-line no-undef
test(("checkbox flow"), () => {
    render(<App />);
    // find the element
   const checkBoxElement = screen.getByRole('checkbox', {name: /disable button/i});
   const buttonElement = screen.getByRole("button", {name: /blue/i})
   // check initial condition
   expect(checkBoxElement).not.toBeChecked();
   expect(buttonElement).toBeEnabled();

   // Click checkBox to disable button
   fireEvent.click(checkBoxElement);
   expect(buttonElement).toBeDisabled();

   // click checkBox again to re-enable button
   fireEvent.click(checkBoxElement);
   expect(buttonElement).toBeEnabled();
});

