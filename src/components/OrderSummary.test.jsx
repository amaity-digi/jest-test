/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import OrderSummary from "./OrderSummary";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

test("Initial Condition", () => {
  render(<OrderSummary />);
  const checkBox = screen.getByRole("checkbox", {
    name: /i agree to terms and conditions/i,
  });
  expect(checkBox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("CheckBox disables button on first click and enables on second click using fireEvent", () => {
  render(<OrderSummary />);
  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkBox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkBox);
  expect(confirmButton).toBeDisabled();
});

// Same thing how to use userEvent insted of fireEvent

test("CheckBox disables button on first click and enables on second click using user Event", async () => {
  const user = userEvent.setup();

  render(<OrderSummary />);
  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkBox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkBox);
  expect(confirmButton).toBeDisabled();
});

test(("pop up response to hover"), () => {
    const user = userEvent.setup();
    console.log("user", user);
})
