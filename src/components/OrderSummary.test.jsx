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

test("pop up response to hover", async () => {
  const user = userEvent.setup();
  // console.log("user", user);
  render(<OrderSummary />);
  const nullPopOver = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopOver).not.toBeInTheDocument();

  //popover appears on mouseHover of checkBox label
  const termsAndCondition = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndCondition);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  //popover disappears on mouseHover of checkBox label
  await user.unhover(termsAndCondition);
  expect(popover).not.toBeInTheDocument();
});
