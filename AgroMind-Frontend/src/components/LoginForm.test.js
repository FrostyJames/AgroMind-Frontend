import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";
import { MemoryRouter } from "react-router-dom"; // Needed to test navigation

// Mock useNavigate using Jest instead of Vitest
const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  const actual = jest.requireActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

describe("LoginForm Component", () => {
  beforeEach(() => {
    mockedNavigate.mockReset();
  });

  test("renders login form elements", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    // Inputs and button
    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("••••••••")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("updates input fields when typing", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText("you@example.com");
    const passwordInput = screen.getByPlaceholderText("••••••••");

    fireEvent.change(emailInput, { target: { value: "farmer@agro.com" } });
    fireEvent.change(passwordInput, { target: { value: "farm123" } });

    expect(emailInput.value).toBe("farmer@agro.com");
    expect(passwordInput.value).toBe("farm123");
  });

  test("navigates to /dashboard on successful login", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText("you@example.com");
    const passwordInput = screen.getByPlaceholderText("••••••••");
    const submitButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "farmer@agro.com" } });
    fireEvent.change(passwordInput, { target: { value: "farm123" } });
    fireEvent.click(submitButton);

    expect(mockedNavigate).toHaveBeenCalledWith("/dashboard");
  });
});
