import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";

test("renders login form elements", () => {
  render(<LoginForm />);

  // Check headings
  expect(screen.getByText("Welcome to AgroMind")).toBeInTheDocument();

  // Check inputs
  expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("••••••••")).toBeInTheDocument();

  // Check button
  expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
});

test("updates input fields when typing", () => {
  render(<LoginForm />);

  const emailInput = screen.getByPlaceholderText("you@example.com");
  const passwordInput = screen.getByPlaceholderText("••••••••");

  // Simulate typing
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "123456" } });

  // Assert that the inputs updated
  expect(emailInput.value).toBe("test@example.com");
  expect(passwordInput.value).toBe("123456");
});
